export const name="hourglass-low-light";
export const id="dl_4b6cc5d595db4e3f976a";
export const url=new URL("../icons/hourglass-low-light.svg?v=d68b882f719a00c995400c74eec3e1e8c07f346d43eaaa1ae842d1a55e9134d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
