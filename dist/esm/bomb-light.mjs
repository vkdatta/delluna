export const name="bomb-light";
export const id="dl_b33036c2a30545e3a31a";
export const url=new URL("../icons/bomb-light.svg?v=e705ae5c63262d3ac36326fe2cb702ff45b83b041a2958603b2611b6ee2bce87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
