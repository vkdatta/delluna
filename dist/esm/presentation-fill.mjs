export const name="presentation-fill";
export const id="dl_e7e79fc3be3949d9952f";
export const url=new URL("../icons/presentation-fill.svg?v=477931fa9f42b59f873c15f0c36edb836feb1c2f4316090146cfbdeb81660e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
