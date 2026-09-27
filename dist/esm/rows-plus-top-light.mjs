export const name="rows-plus-top-light";
export const id="dl_82beebb9f66342eda433";
export const url=new URL("../icons/rows-plus-top-light.svg?v=81601074c6e2e125c831b834f3fc179cc8ef63e21a4d5da4f17cd1edf7463a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
