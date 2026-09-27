export const name="tennis-ball-duotone";
export const id="dl_13121a5ca0bb444aa3f8";
export const url=new URL("../icons/tennis-ball-duotone.svg?v=5eb876895c0dd8140b842b660cf8c0fdcdb4d71c2bdd603e323e08154d40bc7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
