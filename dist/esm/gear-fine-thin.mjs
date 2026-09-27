export const name="gear-fine-thin";
export const id="dl_6f20a27c591140e8949e";
export const url=new URL("../icons/gear-fine-thin.svg?v=a5a5c2127507877e9fade51372ad7156d1c5bd8851ef66e45380b02962cc35c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
