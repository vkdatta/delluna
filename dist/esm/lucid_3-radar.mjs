export const name="lucid_3-radar";
export const id="dl_b6ffc16986ca4785b767";
export const url=new URL("../icons/lucid_3-radar.svg?v=6db8c17301aad1c22c4f892336ccb9f04725a86dc134df6a58d87a05c7caf77b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
