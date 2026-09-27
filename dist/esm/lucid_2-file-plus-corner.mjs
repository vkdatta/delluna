export const name="lucid_2-file-plus-corner";
export const id="dl_59a1d3ff2e3047b39869";
export const url=new URL("../icons/lucid_2-file-plus-corner.svg?v=e43f5fc9ba82316f2e2e25d75049023146c386f5d6ef11d56648de749aec9501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
