export const name="voice_over_off-fill";
export const id="dl_e827699e14bdcb15e454";
export const url=new URL("../icons/voice_over_off-fill.svg?v=a557cc9b844ec35da1b6483b8efaa03b75ee52906955b2c72093dc4511a81903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
