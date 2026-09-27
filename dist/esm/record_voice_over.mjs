export const name="record_voice_over";
export const id="dl_ff959bb25408b5661adb";
export const url=new URL("../icons/record_voice_over.svg?v=32a452a4ceda701624f0d079da5d45c0d960405e52518088754c4936f79f923e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
