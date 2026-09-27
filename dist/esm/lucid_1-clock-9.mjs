export const name="lucid_1-clock-9";
export const id="dl_d3d346a551a240e7b3af";
export const url=new URL("../icons/lucid_1-clock-9.svg?v=b0ad3eacabde4b0d15ac9bf9b66ea1e2660e6899b96b39f914616516e56f4cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
