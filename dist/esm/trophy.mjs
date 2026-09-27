export const name="trophy";
export const id="dl_e12fd020672a410288a9";
export const url=new URL("../icons/trophy.svg?v=b4acfb8b802760f54ebc22da067d259ae4186350177d00f5899f2941461f364a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
