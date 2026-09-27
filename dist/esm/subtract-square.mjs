export const name="subtract-square";
export const id="dl_71864490ee0398273f80";
export const url=new URL("../icons/subtract-square.svg?v=6952385e1102c3905f44afc970959f6ab4a4b5c08057d21ec6c28581e054bb1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
