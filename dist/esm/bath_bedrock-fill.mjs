export const name="bath_bedrock-fill";
export const id="dl_6592d62ef94e8297c066";
export const url=new URL("../icons/bath_bedrock-fill.svg?v=737d933c30a42ac7a5df992ddc2e42c7b263e33a505610636ba07594c747b522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
