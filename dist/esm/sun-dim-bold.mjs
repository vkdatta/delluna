export const name="sun-dim-bold";
export const id="dl_ef4fd1c4e9f3fc921b67";
export const url=new URL("../icons/sun-dim-bold.svg?v=fb9a30daf36bdd4847c33746a83bf4592a2b0a64adfe6ed10c5b9456f6f74623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
