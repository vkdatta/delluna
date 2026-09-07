export const name="lucid_3-picture-in-picture";
export const id="dl_82dcf802705a40499044";
export const url=new URL("../icons/lucid_3-picture-in-picture.svg?v=ab6fa13766cb34ad2fcfae373005bd0dd75e2786c479faae4accd6885eaba4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
