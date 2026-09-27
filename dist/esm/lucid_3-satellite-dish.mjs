export const name="lucid_3-satellite-dish";
export const id="dl_86c47c89e43a465cb48d";
export const url=new URL("../icons/lucid_3-satellite-dish.svg?v=771732728ad0fec4a9628db6cb84fee914e3fbab2f2a0f9b1ea2d7df473dedb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
