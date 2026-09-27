export const name="voice_chat_off-fill";
export const id="dl_8ae013ad7f773a0898d7";
export const url=new URL("../icons/voice_chat_off-fill.svg?v=53ab7d256de74d448cbbe1e51558e6e3acac2c96c3bc01e649f09b06e405077a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
