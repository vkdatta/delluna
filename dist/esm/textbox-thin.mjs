export const name="textbox-thin";
export const id="dl_db7d0f94088e4b3a8a4a";
export const url=new URL("../icons/T/textbox-thin.svg?v=58a3e9da10ec47a95bdefc0fd19330dc18f8fa824fb3b2b4f870461c63d225c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
