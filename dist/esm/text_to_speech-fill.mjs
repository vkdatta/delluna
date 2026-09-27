export const name="text_to_speech-fill";
export const id="dl_244fc247a77c50e0e9ec";
export const url=new URL("../icons/text_to_speech-fill.svg?v=bf7493e454234682b28961805e1ede75a6bc3256a917dc05e8ee27f7a06a2cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
