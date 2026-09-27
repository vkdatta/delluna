export const name="lucid_1-cloud-cog";
export const id="dl_3bbf0f67957645c69bfc";
export const url=new URL("../icons/lucid_1-cloud-cog.svg?v=fca9bfc8974b7237918a8dc010d688778012a35cd528e51d2e430d10f0518b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
