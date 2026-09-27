export const name="bell-slash-duotone";
export const id="dl_a08eed4203d64bc4810c";
export const url=new URL("../icons/bell-slash-duotone.svg?v=47143b9efdb9e58c79b33ebfec11a002217c3c45f2634ae7e17fe27da8f432c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
