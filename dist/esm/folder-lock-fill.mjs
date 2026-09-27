export const name="folder-lock-fill";
export const id="dl_e4853431e9d64642b8ee";
export const url=new URL("../icons/folder-lock-fill.svg?v=334f7b3a0d0aa17052e5c8716a9dd5d66f26941e85ad1a4ebed57efe74c2b617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
