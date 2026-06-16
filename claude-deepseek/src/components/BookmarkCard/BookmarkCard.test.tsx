/**
 * BookmarkCard 组件测试
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { BookmarkCard } from './index';

describe('BookmarkCard', () => {
  const defaultProps = {
    title: 'Hugging Face',
    url: 'https://huggingface.co',
    description: 'AI 模型托管平台',
    tags: ['NLP', 'AI', 'Transformer'],
  };

  it('渲染标题、URL、描述和标签', () => {
    render(<BookmarkCard {...defaultProps} />);

    expect(screen.getByText('Hugging Face')).toBeInTheDocument();
    expect(screen.getByText('https://huggingface.co')).toBeInTheDocument();
    expect(screen.getByText('AI 模型托管平台')).toBeInTheDocument();
    expect(screen.getByText('NLP')).toBeInTheDocument();
    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByText('Transformer')).toBeInTheDocument();
  });

  it('无描述和标签时不渲染对应区域', () => {
    render(<BookmarkCard title="GitHub" url="https://github.com" />);

    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.queryByText('AI 模型托管平台')).not.toBeInTheDocument();
    expect(screen.queryByText('NLP')).not.toBeInTheDocument();
  });

  it('点击卡片触发 onClick 回调', () => {
    const handleClick = jest.fn();
    render(<BookmarkCard {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByRole('article'));
    expect(handleClick).toHaveBeenCalledWith('https://huggingface.co');
  });

  it('键盘 Enter 键触发 onClick 回调', () => {
    const handleClick = jest.fn();
    render(<BookmarkCard {...defaultProps} onClick={handleClick} />);

    fireEvent.keyDown(screen.getByRole('article'), { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledWith('https://huggingface.co');
  });

  it('URL 链接点击不冒泡触发 onClick', () => {
    const handleClick = jest.fn();
    render(<BookmarkCard {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByText('https://huggingface.co'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
