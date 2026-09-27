export const name="court-basketball";
export const id="dl_17f9a768042b4945a2f7";
export const url=new URL("../icons/court-basketball.svg?v=1d59d93793dc48b0b307d0f282aa49ac3ac99e973d408933de4c3b9ce530397e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
