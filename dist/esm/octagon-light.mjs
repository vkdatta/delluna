export const name="octagon-light";
export const id="dl_1687962d9c59467bad8d";
export const url=new URL("../icons/octagon-light.svg?v=254abd6e5160ef5dfe633d11ecbb648999dbaf439fb7bf138ea1fff1723928b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
