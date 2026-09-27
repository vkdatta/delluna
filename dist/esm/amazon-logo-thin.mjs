export const name="amazon-logo-thin";
export const id="dl_b80442ffaa56423c986e";
export const url=new URL("../icons/amazon-logo-thin.svg?v=e639cd162e157d7ffd97792096add6b540f75bca3ed1b13f8091a094f130d4e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
