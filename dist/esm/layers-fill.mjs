export const name="layers-fill";
export const id="dl_a77f4cb8f46ffe2d9d43";
export const url=new URL("../icons/layers-fill.svg?v=9eb989fc8f9ed14a5f82621ef994dde8d54032f9c15c30d5c27530680e82c2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
