export const name="repeat-once";
export const id="dl_0ca9b1f90e554e6584d0";
export const url=new URL("../icons/repeat-once.svg?v=fb93f05d413b97cd3d1736004661d4669cb9c7e84bf052f9fbb062ed3f478ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
