export const name="replit-logo-light";
export const id="dl_c6ad0fecf5b24a6596ef";
export const url=new URL("../icons/replit-logo-light.svg?v=d77eacf8eadca71c37cd95f8c2b3642d9223b38411007a2d19a4f53734ba7b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
