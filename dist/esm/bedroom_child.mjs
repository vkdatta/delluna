export const name="bedroom_child";
export const id="dl_4f6513b501fa6c18c938";
export const url=new URL("../icons/bedroom_child.svg?v=b9e1c4a5cce802cce71d0fd4d7a0ff988da0fe03a7b82cd0b1f340a7c85762fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
