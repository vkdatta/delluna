export const name="voice_chat_off";
export const id="dl_1140eb91c44589cea0f9";
export const url=new URL("../icons/voice_chat_off.svg?v=a6f58a5c0f1c01e894e456ce11bf0f1c5c49c9eb4ee5336b92c7ae6ccc8a1227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
