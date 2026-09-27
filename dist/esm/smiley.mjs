export const name="smiley";
export const id="dl_4ada7b9e0e86410c8165";
export const url=new URL("../icons/smiley.svg?v=9ae00027b56d5d1cde6abec45c50caf3909f1cf23a2a0d1bc0403811348af98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
