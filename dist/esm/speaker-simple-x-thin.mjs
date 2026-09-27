export const name="speaker-simple-x-thin";
export const id="dl_83166d842da09f0c77bb";
export const url=new URL("../icons/speaker-simple-x-thin.svg?v=e9d677b3e5b4c960371f57a898c9574c0a1efd88f634682ed1ea503f4be2c591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
