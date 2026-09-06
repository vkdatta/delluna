export const name="lucid_3-message-square-check";
export const id="dl_4f5af5935ab64a5cb007";
export const url=new URL("../icons/lucid_3-message-square-check.svg?v=4f36b1565d18b2c7cbeb4e21a97be7ad9112db51239566657194d440fbb26ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
