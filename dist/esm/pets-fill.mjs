export const name="pets-fill";
export const id="dl_80bfc70f6f7cf5bf3700";
export const url=new URL("../icons/pets-fill.svg?v=fcbfb2d6f484beae07f6dbbefaada5362a25581ac374d4b6614dd4ffad6bb15d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
