export const name="file-tsx-bold";
export const id="dl_4178ec6f411b4c5f8c31";
export const url=new URL("../icons/file-tsx-bold.svg?v=adfb28570990f6c334d5433673967b2924f288798c119d6c92e3473fdb793acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
