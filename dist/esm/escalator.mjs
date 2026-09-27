export const name="escalator";
export const id="dl_75ac3e15520b85b06688";
export const url=new URL("../icons/escalator.svg?v=e1345e1c6487978845b9b9c60e1511b21aa7fa73e5880847be849de78e4e6800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
