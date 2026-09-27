export const name="vector-three-duotone";
export const id="dl_afee164772c75c3e017f";
export const url=new URL("../icons/vector-three-duotone.svg?v=628aeef5459a0a5dff409142f3f9aaa183e6d277f244b071b47fabb7119f5dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
