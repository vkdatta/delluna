export const name="cake-light";
export const id="dl_28991b29a9bf4a5a9ffe";
export const url=new URL("../icons/cake-light.svg?v=0261a3caeb4c180764be51c7d5dbb38ebf0c895802eb9c992e05a84d7f1ef210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
