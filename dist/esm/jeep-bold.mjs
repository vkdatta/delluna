export const name="jeep-bold";
export const id="dl_212efe0abcb14fe6ab6d";
export const url=new URL("../icons/jeep-bold.svg?v=cd3a679ad8ca3c47382164cea543af0d5f88751a881aab4a4dc2957f96bef762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
