export const name="info-duotone";
export const id="dl_e79bd17c2ab442eb826f";
export const url=new URL("../icons/info-duotone.svg?v=f463b47235a986e8bc429ef1dd94e26da37735dde74edac59c1b8d0daa1def53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
