export const name="tire_repair";
export const id="dl_a0d70da15fab4e438b61";
export const url=new URL("../icons/T/tire_repair.svg?v=5225bbe181593d2b361f5752baef64a64aae9521a605222a951a243e9afbdb17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
