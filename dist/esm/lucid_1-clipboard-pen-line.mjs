export const name="lucid_1-clipboard-pen-line";
export const id="dl_e305fde343c8461dae08";
export const url=new URL("../icons/lucid_1-clipboard-pen-line.svg?v=ba51595d9fdf129ee4d7ef1a39765fa5924768a8672bf9594454aa68d5fa7300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
