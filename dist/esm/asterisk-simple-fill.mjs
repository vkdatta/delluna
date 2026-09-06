export const name="asterisk-simple-fill";
export const id="dl_1aefe3d2570343218245";
export const url=new URL("../icons/asterisk-simple-fill.svg?v=db01a0ba9aa5fa1ac93eae219d2845c5d11268118cf4a6b8c7b9baf8c53bf773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
