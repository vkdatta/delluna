export const name="turn_slight_right-fill";
export const id="dl_6e35f6207dd1ec880989";
export const url=new URL("../icons/turn_slight_right-fill.svg?v=83260989af44f84052573a526f3bd620292a151d7470a678b9ac9bbc1a0f3021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
