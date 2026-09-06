export const name="microphone";
export const id="dl_2ee9613ac90947f5b2da";
export const url=new URL("../icons/microphone.svg?v=b49dabfaf603e82594cef0c5e5784c747f4c098b7723d2973c92965745ca93a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
