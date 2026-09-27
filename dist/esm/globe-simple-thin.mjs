export const name="globe-simple-thin";
export const id="dl_17e216efed624b639a22";
export const url=new URL("../icons/globe-simple-thin.svg?v=e74ec8631a17d4263e74cf6652691e40cedbfe4ffa83030f3f8fb447319d942f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
