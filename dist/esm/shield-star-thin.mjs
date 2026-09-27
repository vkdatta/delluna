export const name="shield-star-thin";
export const id="dl_2f37d810ce71aa18b0c8";
export const url=new URL("../icons/shield-star-thin.svg?v=7c6c166d7dd85d5147c4339bf79271c426ef81c91e17fda4bf15b6eb9fbb3333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
