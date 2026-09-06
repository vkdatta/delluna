export const name="gauge-thin";
export const id="dl_7a99ca8fcf4d49d29d4d";
export const url=new URL("../icons/gauge-thin.svg?v=84e449d4d990e454307345af7b38460c62518f9953e35d46ef9fbcab1202678c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
