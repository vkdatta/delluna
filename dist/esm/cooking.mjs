export const name="cooking";
export const id="dl_becd89a87c9aca3c33ee";
export const url=new URL("../icons/cooking.svg?v=d665b09e2bb97cafcf3fcb12443a4da6106e06ee3c371dbde29a7fd91232a8ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
