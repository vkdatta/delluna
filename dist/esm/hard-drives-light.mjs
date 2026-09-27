export const name="hard-drives-light";
export const id="dl_395305c74cb741f4a80f";
export const url=new URL("../icons/hard-drives-light.svg?v=e2342eba47821a38f3aa0a04e69cdb08f8ba27651e006380c9b2f8be3b4431c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
