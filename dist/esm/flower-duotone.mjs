export const name="flower-duotone";
export const id="dl_43079dfa63e34195bb38";
export const url=new URL("../icons/flower-duotone.svg?v=8498831100032f0bd3ed8bd3c37a28289d84a54f435dce2167a037d5029f1647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
