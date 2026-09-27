export const name="speech_to_text_2-fill";
export const id="dl_3b9da004d35ab56dea59";
export const url=new URL("../icons/speech_to_text_2-fill.svg?v=bfe018b77776a345a9c05a9ff59a19461da8e16454bd9ad3e4cd7a6a0216154e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
