export const name="flag_circle-fill";
export const id="dl_3df0caf7319d8c62cc4f";
export const url=new URL("../icons/flag_circle-fill.svg?v=07598553ede62173eace003b8ed5654a39e2798595d1b883430b5cbc401f9c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
