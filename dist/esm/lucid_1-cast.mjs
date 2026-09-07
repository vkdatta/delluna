export const name="lucid_1-cast";
export const id="dl_c4b2242229d4469580d4";
export const url=new URL("../icons/lucid_1-cast.svg?v=a7e6a03a3a2b43da650cc1332ce41edbf09c0d76efc4faa6db37c3c1bf5ab020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
