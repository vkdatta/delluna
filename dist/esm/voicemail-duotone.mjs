export const name="voicemail-duotone";
export const id="dl_b23b2e55ceae5aeb7770";
export const url=new URL("../icons/voicemail-duotone.svg?v=5c6cc997e66f58a7557dac580ae40ae905b2e59cb8c7bbf87e582ebff29ebbc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
