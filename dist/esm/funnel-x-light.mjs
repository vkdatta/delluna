export const name="funnel-x-light";
export const id="dl_08bf2cfaa3d245f5a21a";
export const url=new URL("../icons/funnel-x-light.svg?v=273bcf24ca292e3094cfbd33ce94bb5cfcde0797bc11480e22b1216ad3eea935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
