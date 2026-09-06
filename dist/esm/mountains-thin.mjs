export const name="mountains-thin";
export const id="dl_9c4dbef3511f46b491dd";
export const url=new URL("../icons/mountains-thin.svg?v=537d230f8c4777f76493634885b688d4963243e11bb40bba81908353c4b056cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
