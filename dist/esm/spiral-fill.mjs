export const name="spiral-fill";
export const id="dl_ac146d852b98440183eb";
export const url=new URL("../icons/S/spiral-fill.svg?v=7ac27f91a9ff8890ef06fbab726a22078114daf6bb7c2584a52fe9218d755a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
