export const name="paragraph-duotone";
export const id="dl_953b90b0152b485f84f2";
export const url=new URL("../icons/paragraph-duotone.svg?v=74679c3b261ddac97913b465e0c6237d94713a7004175a7d00e95299e1652ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
