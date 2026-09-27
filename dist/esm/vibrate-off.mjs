export const name="vibrate-off";
export const id="dl_c0d57ba9a81348959cde";
export const url=new URL("../icons/vibrate-off.svg?v=46c48486a7b74c53a8eee9ba4a1f84b31657750401b469a9aef46376c0b14157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
