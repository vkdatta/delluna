export const name="church-duotone";
export const id="dl_16cf9de31fbc486c8d28";
export const url=new URL("../icons/church-duotone.svg?v=499c2c9a28ce36b8e6ca522c4362551ffe674c8595009b411bbd3363390afc80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
