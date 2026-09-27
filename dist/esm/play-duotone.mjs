export const name="play-duotone";
export const id="dl_83fe6808ff3b46288dfd";
export const url=new URL("../icons/play-duotone.svg?v=35e5941fde621b30a878128efc2cb4da3147db26bbfa88adeb05e5efb76b0ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
