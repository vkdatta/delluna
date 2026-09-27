export const name="file-ts-light";
export const id="dl_62360c9f907d40dfaef7";
export const url=new URL("../icons/file-ts-light.svg?v=29dfa6e1365d97d31cc6bb9f48ea86da82c66c57c6304b6622daccfb98429ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
