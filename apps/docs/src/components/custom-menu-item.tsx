"use client"
import { buttonVariants } from "@hayitbek/realpay-ui-button"
import { PageTree } from "fumadocs-core/server"
import Link from "next/link"

 export const CustomMenuItem = ({item}:{
  item:PageTree.Item
 }) => {
  return (
   <Link href={item.url} className={buttonVariants({variant:"outline",className:"w-full"})}>
    {item.name}
   </Link> 
  )
}