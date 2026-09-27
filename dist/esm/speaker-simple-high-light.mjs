export const name="speaker-simple-high-light";
export const id="dl_936c8f2be82ef5aeb4f4";
export const url=new URL("../icons/speaker-simple-high-light.svg?v=9c51a36227052171c17aa48fba34ca97065cfc6a06d57db783a6feee2fcec9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
