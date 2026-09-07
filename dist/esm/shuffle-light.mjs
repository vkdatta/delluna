export const name="shuffle-light";
export const id="dl_41a2e8620764468c9c2b";
export const url=new URL("../icons/S/shuffle-light.svg?v=f5c59b3a3f38932229615ce0cd081f46b6cc2ad897b9dce1e73f8b390564a1d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
