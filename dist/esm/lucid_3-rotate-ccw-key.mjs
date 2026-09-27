export const name="lucid_3-rotate-ccw-key";
export const id="dl_1f53a9bddbbe4efa9f78";
export const url=new URL("../icons/lucid_3-rotate-ccw-key.svg?v=3d4fef82fd1aa7f87bb21873600e80257495a41bf54b37eaa9e1eef162782ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
