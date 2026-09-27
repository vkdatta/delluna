export const name="text-h-three-thin";
export const id="dl_a8f7d93137303d6b2b9b";
export const url=new URL("../icons/text-h-three-thin.svg?v=94f15c3e56ed9e20860593b855ec2f5caaf96125525da373ba58e6fe2fe65fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
