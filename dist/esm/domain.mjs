export const name="domain";
export const id="dl_6af6ab474baca859323d";
export const url=new URL("../icons/domain.svg?v=cfdaf51db88b3e124f6aef78a2a5703187f9018c49911acf2691370c463159c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
