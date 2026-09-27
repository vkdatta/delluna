export const name="file-c";
export const id="dl_5c7efbe0c5b04907955e";
export const url=new URL("../icons/file-c.svg?v=96beaae456983e04531873289616bcc8adbed9fbb34d29ec05a8af5122669586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
