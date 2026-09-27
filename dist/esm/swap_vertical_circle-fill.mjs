export const name="swap_vertical_circle-fill";
export const id="dl_2e137728f6b54572c0f1";
export const url=new URL("../icons/swap_vertical_circle-fill.svg?v=14281db60e12dfd0b92420c6250573ef67d9a4d20d2381da3df5d8fcc5fe9b01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
