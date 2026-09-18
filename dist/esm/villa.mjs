export const name="villa";
export const id="dl_84f20ef03e44447091d5";
export const url=new URL("../icons/V/villa.svg?v=c9d5d06ec78348edd6321e701f9af310b51b2bfe9eb3c6860a8ea8b83eaba869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
