export const name="vibrate-thin";
export const id="dl_4109008e51f84e86b53d";
export const url=new URL("../icons/V/vibrate-thin.svg?v=3a4e1771c31dbed5a570743b930ffd0ddffdd3b76c3c0606427b9a3f97fd2cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
