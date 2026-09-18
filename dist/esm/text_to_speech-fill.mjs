export const name="text_to_speech-fill";
export const id="dl_1b4b90af3497434cbea2";
export const url=new URL("../icons/text_to_speech-fill.svg?v=250a498f51e8a97561151f89d176ef8652468387f01376feaa99c22c400c9350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
