export const name="lucid_2-copy-slash";
export const id="dl_b3c582f90c5849a2a14b";
export const url=new URL("../icons/lucid_2-copy-slash.svg?v=e9909876e3b76df8cdd72d71544ec9c402bee78960b61a157e5a1a09a5ad00af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
