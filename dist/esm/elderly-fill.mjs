export const name="elderly-fill";
export const id="dl_2829a4f2870838d1f110";
export const url=new URL("../icons/elderly-fill.svg?v=66065aaa52d3dbaaa4056a53d7436cb62dc50ca2d5734d54001d889a6c4057ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
