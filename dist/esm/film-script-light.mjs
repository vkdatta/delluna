export const name="film-script-light";
export const id="dl_3733eeee3d004960834c";
export const url=new URL("../icons/film-script-light.svg?v=e2e97e7f845b9fcfcdac98e9276d6503c46e6813bcf17f528827bba74fc92ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
