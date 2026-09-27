export const name="lucid_1-check-line";
export const id="dl_b3a5bbb5e4df464fa98b";
export const url=new URL("../icons/lucid_1-check-line.svg?v=5cc6ef5267de270f5fcae3d140e602d811b8f09a1ef66dd9b90cdbc632c3aca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
