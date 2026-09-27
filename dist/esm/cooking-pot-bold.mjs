export const name="cooking-pot-bold";
export const id="dl_6e24ec2ab53b434e8c0d";
export const url=new URL("../icons/cooking-pot-bold.svg?v=f67b41c378ae2b68c90863cc8373b608a99dcb0e0c6ab47d753e7ee09dd7fcc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
