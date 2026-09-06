export const name="file-code-light";
export const id="dl_fe639e649d6a45ba89bf";
export const url=new URL("../icons/file-code-light.svg?v=bc557e7621c1e34f94cd2dfa6aa6e5b28e2911bbf3d375c0e08fb456df09a972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
