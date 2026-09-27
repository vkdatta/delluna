export const name="speech_to_text_2";
export const id="dl_8edec4d400700b6e3fff";
export const url=new URL("../icons/speech_to_text_2.svg?v=3965258e02c5f27167d1d9de3cd50c2c999ac9fbc876fdc09a328a08c714f989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
