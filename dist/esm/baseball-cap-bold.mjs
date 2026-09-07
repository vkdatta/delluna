export const name="baseball-cap-bold";
export const id="dl_0aceeab9e9604ee0bf48";
export const url=new URL("../icons/baseball-cap-bold.svg?v=5dc02d4b171f1d1d6baa27550347a3a9f6755ee046d1b1f297007e876c1bfc0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
