export const name="computer-tower-light";
export const id="dl_f5eaf291ed6e49e6909b";
export const url=new URL("../icons/computer-tower-light.svg?v=fab3ff65d39f6b93d334d165f8036e3afec97c42de33ac5f64ede499dea8ad73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
