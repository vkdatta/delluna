export const name="function_box";
export const id="dl_71cdbdbbb1bf47aba224";
export const url=new URL("../icons/function_box.svg?v=1e557d4a3ec9221b818fbbc7cc14bd3ae9d07df2f5185c6aa8a279d58f751d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
