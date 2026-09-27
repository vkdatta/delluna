export const name="lucid_3-scan-text";
export const id="dl_ac67c393baad4d29866f";
export const url=new URL("../icons/lucid_3-scan-text.svg?v=e7b01cc2cbea1d2324861c9c26450ff649ba6cc1a91637ddbd84ff4feff15e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
