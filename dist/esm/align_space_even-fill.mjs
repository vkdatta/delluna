export const name="align_space_even-fill";
export const id="dl_03bc490daacd8f23db3d";
export const url=new URL("../icons/align_space_even-fill.svg?v=231695a30610bd2340b8195aa9b89ec13cf84980d62882a068fc0a45ad159ec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
