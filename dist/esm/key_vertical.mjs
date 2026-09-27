export const name="key_vertical";
export const id="dl_b3a4e443e658832554c8";
export const url=new URL("../icons/key_vertical.svg?v=c4359763c6f5e2d3ca1dd2a53a83d8aa48e669cdaa91844186beda7e6801f427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
