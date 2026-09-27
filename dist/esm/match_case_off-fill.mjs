export const name="match_case_off-fill";
export const id="dl_cecaa98a18c3d3cc5c3f";
export const url=new URL("../icons/match_case_off-fill.svg?v=11f823b7cec6990f63d9f483bf4fbda102eb9e41b5e044658f5a4b9195b3e167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
