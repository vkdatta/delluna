export const name="hourglass-simple-medium-light";
export const id="dl_eba41fb8108f40229692";
export const url=new URL("../icons/hourglass-simple-medium-light.svg?v=be35e47f4b693225831353f3320f8250e4451b493d378df56106367a41f73f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
