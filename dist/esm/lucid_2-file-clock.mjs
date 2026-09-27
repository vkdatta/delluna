export const name="lucid_2-file-clock";
export const id="dl_065419471e444a068768";
export const url=new URL("../icons/lucid_2-file-clock.svg?v=8ed1cb2a48342e50e2c7736440a0e01eb7a5d0b3b9d15b56550954cb9cf1797d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
