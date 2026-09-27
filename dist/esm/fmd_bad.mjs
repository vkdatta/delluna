export const name="fmd_bad";
export const id="dl_ea782863ba9352667948";
export const url=new URL("../icons/fmd_bad.svg?v=3cabdb369026acf1e088e30e9afbfd626cbfef12d045ebd3a4add13e6f706d4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
