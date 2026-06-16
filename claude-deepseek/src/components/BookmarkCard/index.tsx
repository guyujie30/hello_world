/**
 * BookmarkCard 组件
 * 展示单个书签的卡片，显示标题、URL、描述和标签列表
 */

import { BookmarkCardProps } from './types';

export function BookmarkCard({
  title,
  url,
  description,
  tags = [],
  onClick,
  className = '',
}: BookmarkCardProps) {
  const handleClick = () => {
    onClick?.(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(url);
    }
  };

  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${className}`}
      role="article"
      tabIndex={onClick ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
    >
      {/* 标题 */}
      <h3 className="mb-1 truncate text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* URL */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 block truncate text-sm text-blue-600 hover:text-blue-800 hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        {url}
      </a>

      {/* 描述 */}
      {description && (
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {description}
        </p>
      )}

      {/* 标签列表 */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
