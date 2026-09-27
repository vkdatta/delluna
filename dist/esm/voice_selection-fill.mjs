export const name="voice_selection-fill";
export const id="dl_ebf32c622ef3b1706383";
export const url=new URL("../icons/voice_selection-fill.svg?v=2c26032a5df7014c23f2c4a3b1daa225165801bf41346496bfaa6e8f4e087ebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
