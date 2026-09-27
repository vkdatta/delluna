export const name="lunch_dining-fill";
export const id="dl_5d4bafafa8bd6f0b21fc";
export const url=new URL("../icons/lunch_dining-fill.svg?v=2687ee0d3f108efa7b6798edd9c965baa3a5f6819ba9b533b37eec2fd5e088a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
