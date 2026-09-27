export const name="rewind-circle-light";
export const id="dl_06971c2e3f1a4f358849";
export const url=new URL("../icons/rewind-circle-light.svg?v=c1f0930dad938943b3135546ae71d9fb3328d792c62ecd661a2bf2f174156278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
