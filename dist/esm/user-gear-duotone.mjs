export const name="user-gear-duotone";
export const id="dl_32b8ff8d5379483cae29";
export const url=new URL("../icons/U/user-gear-duotone.svg?v=2063619379e1da81360708557d99a7bacfc0cf86a732be784b890f4f9987ba4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
