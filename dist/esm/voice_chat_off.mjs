export const name="voice_chat_off";
export const id="dl_d64670ada36e4e4894e2";
export const url=new URL("../icons/V/voice_chat_off.svg?v=32c14e3051c07d6c1e9ab2247ae19fd832eaf093b4186def1616ffa5d2d25522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
