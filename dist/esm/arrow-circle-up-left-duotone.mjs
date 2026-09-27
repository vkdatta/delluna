export const name="arrow-circle-up-left-duotone";
export const id="dl_be957132148c4334b731";
export const url=new URL("../icons/arrow-circle-up-left-duotone.svg?v=6bb5ce994d7336ecbc8f4fb280d88770219020573d46ed7c70159763034e45d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
