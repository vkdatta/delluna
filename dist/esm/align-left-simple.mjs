export const name="align-left-simple";
export const id="dl_dd973dd371f44c74a5e8";
export const url=new URL("../icons/align-left-simple.svg?v=14315c3d113595c5749d30516d8b447708ab5a2f1b662295194bf4abc6c0ad91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
