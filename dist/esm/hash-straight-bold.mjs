export const name="hash-straight-bold";
export const id="dl_04d8b6b6e54f4b52a800";
export const url=new URL("../icons/hash-straight-bold.svg?v=04a28b9e8d9ccb7e402be618495fad679174cd1dea16fecb71ac5540beab5e0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
