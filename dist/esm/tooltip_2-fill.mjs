export const name="tooltip_2-fill";
export const id="dl_25bb5fd0f81e4f6e9b05";
export const url=new URL("../icons/tooltip_2-fill.svg?v=70ee0cd19a5658275ffca41357d64e05facfebc6f6801d03edbf85ace3ff6864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
