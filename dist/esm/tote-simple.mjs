export const name="tote-simple";
export const id="dl_2e3d405a8e9b6be4ce1c";
export const url=new URL("../icons/tote-simple.svg?v=08c16f46b1b7a00cf877083a388ba6825f3901ec395d29f5e27357f847333211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
