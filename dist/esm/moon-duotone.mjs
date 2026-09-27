export const name="moon-duotone";
export const id="dl_30a669b750174436b2ee";
export const url=new URL("../icons/moon-duotone.svg?v=431018574e59b4e2659542fff65954e0635ece91b9288a2106992c013a03539a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
