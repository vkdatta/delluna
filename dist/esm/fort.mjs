export const name="fort";
export const id="dl_1ca795092f8bdae46959";
export const url=new URL("../icons/fort.svg?v=29a9644f1633c8db65f9e742c9345683d7b3d6514b0e07fc2a2aca07fddc39e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
