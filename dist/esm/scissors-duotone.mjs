export const name="scissors-duotone";
export const id="dl_68cd44fc06f9504e6c59";
export const url=new URL("../icons/scissors-duotone.svg?v=59eff9908401eb86224ccde3fc704e0e2bb5699ef4e6a216ac1fbc435d64584e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
