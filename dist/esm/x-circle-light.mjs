export const name="x-circle-light";
export const id="dl_2042fbf969f31b99a244";
export const url=new URL("../icons/x-circle-light.svg?v=0ebe534de1c482c0650572b26908cda898c556055c42369c7a74b3c2815d2334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
