export const name="lucid_1-badge-dollar-sign";
export const id="dl_e411b0dbc5f34a11bf93";
export const url=new URL("../icons/lucid_1-badge-dollar-sign.svg?v=566248bc7e9e72473392d76bf2106de3a6fafec444c838b87e122fe0e85e1153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
