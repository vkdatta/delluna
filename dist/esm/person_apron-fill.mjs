export const name="person_apron-fill";
export const id="dl_3fa6b4dd05d998084acc";
export const url=new URL("../icons/person_apron-fill.svg?v=1aec998139c271d0a704197c86e74b8ada85594f27c0ed281735696dd3c0694d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
