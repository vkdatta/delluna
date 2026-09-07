export const name="speaker-simple-x-thin";
export const id="dl_73a95ed6337c4d82a365";
export const url=new URL("../icons/S/speaker-simple-x-thin.svg?v=cb20f85581bf88fd506cf414baab33b86a40ee1b3da152047b9b4a2e358ba56f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
