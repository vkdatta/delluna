export const name="shape_line";
export const id="dl_820704564e4b3e4c4401";
export const url=new URL("../icons/shape_line.svg?v=6b679ac0be1c73571d83eed553bff27c05e8bb02f0cd18a58994fdaa3372f692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
