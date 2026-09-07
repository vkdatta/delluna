export const name="steam-logo-duotone";
export const id="dl_5ff35b54f9e74adf87a7";
export const url=new URL("../icons/S/steam-logo-duotone.svg?v=35b7b86e07e71f2aec6aca62068ca7ce345c1baea31002c758add66a47af32ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
