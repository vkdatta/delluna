export const name="hand-heart-fill";
export const id="dl_1d57033205214a3896d1";
export const url=new URL("../icons/hand-heart-fill.svg?v=f270459ed24007c473e5ceb06d7d923f7be256a35688500bb1854f187e87bc4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
