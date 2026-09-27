export const name="file-jpg-light";
export const id="dl_28b14f7b32994c499791";
export const url=new URL("../icons/file-jpg-light.svg?v=b7c97db53bba3b546eb6e2bdea6bd1cd54a0a980fc1d091dc5eee982bfc6aee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
