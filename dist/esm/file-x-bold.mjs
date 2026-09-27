export const name="file-x-bold";
export const id="dl_c4d6bc03e6614d2d80bd";
export const url=new URL("../icons/file-x-bold.svg?v=97f3398bc2ddfb7dd512a82227920351e70c2981f10020e36642719d8b9a2af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
