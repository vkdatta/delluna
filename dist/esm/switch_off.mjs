export const name="switch_off";
export const id="dl_caca5e58c4c0243c0aee";
export const url=new URL("../icons/switch_off.svg?v=3ba07bd739f620aec2d787befee6f6d7557846bfc15c2f5a4fe0f438a9e47d04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
