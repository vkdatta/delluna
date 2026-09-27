export const name="hand-soap-fill";
export const id="dl_eed3ba6cbc084bdc8022";
export const url=new URL("../icons/hand-soap-fill.svg?v=47d6bfa33de04175199443607c399fca71c67e1ce50fad53912cb2535af8e1ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
