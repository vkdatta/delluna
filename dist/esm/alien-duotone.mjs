export const name="alien-duotone";
export const id="dl_933ffacd29b7453185e2";
export const url=new URL("../icons/alien-duotone.svg?v=91d6a4fc7e6504f9bb345424324633755759a3710a01c35b51aefdff894d2bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
