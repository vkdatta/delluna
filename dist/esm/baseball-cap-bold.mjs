export const name="baseball-cap-bold";
export const id="dl_0aceeab9e9604ee0bf48";
export const url=new URL("../icons/baseball-cap-bold.svg?v=8b7ba2bf64c5f4ac41a434ed74e00b50cf8d9e823d29e6c706cfad16895a58a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
