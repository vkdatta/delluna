export const name="vault-light";
export const id="dl_354702d6db37f6e5d94b";
export const url=new URL("../icons/vault-light.svg?v=c5dc6530f6ca04fe98cfd1d5a20ae647cbecb83903e593f88286e07f79de8109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
