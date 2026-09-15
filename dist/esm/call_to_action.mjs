export const name="call_to_action";
export const id="dl_ad65fbea3d014e2abca0";
export const url=new URL("../icons/C/call_to_action.svg?v=bc59ea603b75de535c57834cda7af65edb42f3f356d23fb3e5ee59d11abd6a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
