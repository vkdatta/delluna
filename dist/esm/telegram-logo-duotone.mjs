export const name="telegram-logo-duotone";
export const id="dl_8f14fb59b01beef5b3c3";
export const url=new URL("../icons/telegram-logo-duotone.svg?v=715126999ca98be27a9508bbc4b64eb717bf313174bf060c04132f3d6b34b28b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
