export const name="flashlight_off-fill";
export const id="dl_32fb3214051ab19522ca";
export const url=new URL("../icons/flashlight_off-fill.svg?v=11aa2e1b5006f3ef941275ca670afec9f45c253b8445331b4cebd397fbf4f044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
