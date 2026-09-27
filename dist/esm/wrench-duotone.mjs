export const name="wrench-duotone";
export const id="dl_9e9dfb70c86fc19350b6";
export const url=new URL("../icons/wrench-duotone.svg?v=3f1ffa2a0c6c63cf46629243c7f251992cb29d3c475bee3595d88af87ae7a2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
