export const name="tab_new_right";
export const id="dl_546bbbb42f8547cb97e1";
export const url=new URL("../icons/T/tab_new_right.svg?v=3a231706876d0a4e8cbef2a20619bbc7d001fa232e9a5cec67c70cb347c43343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
