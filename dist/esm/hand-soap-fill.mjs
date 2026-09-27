export const name="hand-soap-fill";
export const id="dl_eed3ba6cbc084bdc8022";
export const url=new URL("../icons/hand-soap-fill.svg?v=7fa48247f1af6cc160e567802a9479c70243be16ff1e3900837f69fdd5a786a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
