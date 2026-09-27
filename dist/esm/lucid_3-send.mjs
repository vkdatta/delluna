export const name="lucid_3-send";
export const id="dl_8d00aedec33444ea8191";
export const url=new URL("../icons/lucid_3-send.svg?v=4dad085d052cb4289161a5813386075de40c6884e32e7a63c295ce407a1438c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
