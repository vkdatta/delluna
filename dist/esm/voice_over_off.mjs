export const name="voice_over_off";
export const id="dl_56627b4fd7e7775c8470";
export const url=new URL("../icons/voice_over_off.svg?v=cccefbd3f0fbd4f14adb17fbab378c34b545ccb2b22c4cfc96fa966a951a550b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
