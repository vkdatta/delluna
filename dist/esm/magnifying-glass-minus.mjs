export const name="magnifying-glass-minus";
export const id="dl_f8b58a0cec1543b48503";
export const url=new URL("../icons/magnifying-glass-minus.svg?v=aca0938d161ea1c230609fc6c3f6a70dfb93aac7c0ebb6b0b64b03e9013a28ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
