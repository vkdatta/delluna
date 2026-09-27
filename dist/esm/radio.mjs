export const name="radio";
export const id="dl_b6e1c5df04a24945b13f";
export const url=new URL("../icons/radio.svg?v=7461b195ac79e766523c0414ec51c66f1a16eb8e585812100f33b7867f13994b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
