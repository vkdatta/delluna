export const name="chat-centered-slash-thin";
export const id="dl_0ceea504c34149fbbb00";
export const url=new URL("../icons/chat-centered-slash-thin.svg?v=64fd588d73a56375247ca0888c2130c06ea3d007f9c7190b495ad7291eae5b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
