export const name="code";
export const id="dl_6866cab24c5dfbb81a90";
export const url=new URL("../icons/code.svg?v=7caf4f29f978017a40714697c1bf2b4f2455de2ea11bd9c6b46f9800b4108aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
