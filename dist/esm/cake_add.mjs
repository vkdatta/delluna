export const name="cake_add";
export const id="dl_dcefa7a8e31424222bd4";
export const url=new URL("../icons/cake_add.svg?v=f773a766bba759621cfa75e18117d6750123d501605054555e890f4bf56708a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
