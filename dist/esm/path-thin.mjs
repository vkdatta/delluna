export const name="path-thin";
export const id="dl_30f8b6672b324b9fbc58";
export const url=new URL("../icons/path-thin.svg?v=d7e3bffede6d5c43b1d09e3f9f8a91cc7c4984e52d52dda8c208d5679fb486a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
