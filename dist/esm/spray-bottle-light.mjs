export const name="spray-bottle-light";
export const id="dl_fdd89140ca43dc9f1eb0";
export const url=new URL("../icons/spray-bottle-light.svg?v=e77d9fc81e8a4f497b89ef92f1e03c33bf2668cfd977074af0885a3a36180196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
