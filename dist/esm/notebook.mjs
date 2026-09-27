export const name="notebook";
export const id="dl_5716d0ffe8c349c98ec9";
export const url=new URL("../icons/notebook.svg?v=fb29aa9dcaf8cc7d18728016c41a081a1198dc8796051b350e007ed9c38e6867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
