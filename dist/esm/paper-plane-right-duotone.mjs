export const name="paper-plane-right-duotone";
export const id="dl_96a99dfb9b0749f6b773";
export const url=new URL("../icons/paper-plane-right-duotone.svg?v=db861c62b92239f8e881c191419150d6d9cde7d6df976ee9f121d5b897fd5574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
