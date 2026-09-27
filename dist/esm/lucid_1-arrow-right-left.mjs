export const name="lucid_1-arrow-right-left";
export const id="dl_8b11658e8b1c4aba9367";
export const url=new URL("../icons/lucid_1-arrow-right-left.svg?v=5a0354a0e89e2d0079104312fd1f27b1c77de571e61ee258fe320aa3cc3527ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
