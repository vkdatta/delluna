export const name="lucid_3-rectangle-goggles";
export const id="dl_5ff7e55634614577a66d";
export const url=new URL("../icons/lucid_3-rectangle-goggles.svg?v=e15def2c3e0d00393821aa26e4eeb7bbf5bb088b65a896dd176037ddfc2f0694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
