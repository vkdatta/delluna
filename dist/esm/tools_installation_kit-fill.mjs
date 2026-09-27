export const name="tools_installation_kit-fill";
export const id="dl_0b5d3560dba70aa4ca48";
export const url=new URL("../icons/tools_installation_kit-fill.svg?v=6233490de539f236528953a5bc968923a86298dcd0ef2d3bbf9425f2f440b807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
