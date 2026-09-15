export const name="femur_alt-fill";
export const id="dl_414d0b44807a412a888f";
export const url=new URL("../icons/F/femur_alt-fill.svg?v=afd26f9592e99befe0d4f7ca5cced1e15092bdac6f4eeb9ca967e072fe2686b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
