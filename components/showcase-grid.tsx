import { CategorySection } from "@/components/category-section"
import getContentListGroupbyCategory from '@/fetch/getContentListGroupbyCategory';

export default async function ShowcaseGrid() {
  const data = await getContentListGroupbyCategory()
  console.log('list', data)
  return (
    <div className="flex flex-col gap-12">
      {data.map((item: any) => (
        <CategorySection key={item.category.category_id} category={item.category.category_nm} items={item.list} />
      ))}
    </div>
  )
}
