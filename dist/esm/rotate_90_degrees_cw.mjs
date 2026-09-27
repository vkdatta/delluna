export const name="rotate_90_degrees_cw";
export const id="dl_af91251284ae9e0e4eb8";
export const url=new URL("../icons/rotate_90_degrees_cw.svg?v=5a04bf685be4ee1078cd03bfb9168e293b294a372681431dcc05b2eeeb4a36ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
