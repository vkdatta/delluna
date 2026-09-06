export const name="arrows-left-right-thin";
export const id="dl_65ce1e20c6d44018bf7f";
export const url=new URL("../icons/arrows-left-right-thin.svg?v=0520d072fe28c78c6df7707215ae9d42c034d3c4cb79554c99e9d2be9df273c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
