export const name="nest_heat_link_e-fill";
export const id="dl_4291e41f537003ee16e0";
export const url=new URL("../icons/nest_heat_link_e-fill.svg?v=a18ecaf674d8f0a5cfbf291b25b8b60770d5453e2ee32ea6ab4db8320963e923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
