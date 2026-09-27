export const name="lucid_1-axis-3d";
export const id="dl_f0caa143472a4e949420";
export const url=new URL("../icons/lucid_1-axis-3d.svg?v=8e487950bfc52df25ca728e9833db3dc3ef44d06c9ef9508161ff536064a61e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
