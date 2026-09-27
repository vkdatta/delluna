export const name="brightness_empty";
export const id="dl_a69c705cf3c8d1d7ee9d";
export const url=new URL("../icons/brightness_empty.svg?v=46f1b341b5e1fe5ded2569eead537d488b69b815bfc7ff7e6bc4eb8efc2a0f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
