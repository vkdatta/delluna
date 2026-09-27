export const name="x-square-fill";
export const id="dl_4d6730183ebf2af26e53";
export const url=new URL("../icons/x-square-fill.svg?v=568dda72ee7cc8cce45d94b1d99d673756d47a41758019c95c23dd111b4357f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
