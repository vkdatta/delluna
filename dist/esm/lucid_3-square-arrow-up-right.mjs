export const name="lucid_3-square-arrow-up-right";
export const id="dl_af432c267a984ab4ba3f";
export const url=new URL("../icons/lucid_3-square-arrow-up-right.svg?v=1a8a88120c15c245b2fece8b7292fe8e915ea4afdfb90822c28ef0d17cc50a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
