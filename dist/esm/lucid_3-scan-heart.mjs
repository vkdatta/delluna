export const name="lucid_3-scan-heart";
export const id="dl_6b5e635b6b1740ad9973";
export const url=new URL("../icons/lucid_3-scan-heart.svg?v=1ce8170528af716985420a9466a7ae1bd066b160a3053ea6f8d01a32e4b35654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
