export const name="scribble-duotone";
export const id="dl_656a78477b8e9e0429da";
export const url=new URL("../icons/scribble-duotone.svg?v=51d7ec20d901212f453f047576defc9b759d280348936fe1b27005eff066da2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
