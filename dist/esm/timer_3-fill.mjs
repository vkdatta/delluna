export const name="timer_3-fill";
export const id="dl_078d0fea47f86305b2b7";
export const url=new URL("../icons/timer_3-fill.svg?v=5d938c7727d859d1aaeb3c276a43788772b66b1cde19d6c6834605022506eb80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
