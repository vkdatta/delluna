export const name="google-play-logo-light";
export const id="dl_e9ccca373b2d4787b17e";
export const url=new URL("../icons/google-play-logo-light.svg?v=1393c90719362ae5e5f840cf162d489c4f699eb598e1d5e87529cf69811fc42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
