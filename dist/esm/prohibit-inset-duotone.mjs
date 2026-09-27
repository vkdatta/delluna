export const name="prohibit-inset-duotone";
export const id="dl_616cb0620f9a49689696";
export const url=new URL("../icons/prohibit-inset-duotone.svg?v=c717c23209c8d9d6fc339babf381af1ac36cad1b5d00aa9d6e14b4a0930e96ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
