export const name="lucid_3-message-square-check";
export const id="dl_4f5af5935ab64a5cb007";
export const url=new URL("../icons/lucid_3-message-square-check.svg?v=142048d07e294dda909601ebc5f15c86f8baebda29b897dab651b53b2dd3216c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
