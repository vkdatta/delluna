export const name="user-gear-duotone";
export const id="dl_6434e3a965277e4fc2d6";
export const url=new URL("../icons/user-gear-duotone.svg?v=2063619379e1da81360708557d99a7bacfc0cf86a732be784b890f4f9987ba4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
