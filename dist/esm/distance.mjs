export const name="distance";
export const id="dl_220798abb2de4d9b8a6a";
export const url=new URL("../icons/D/distance.svg?v=2abf048d6e9dfd1ff8434a116132e9c49230ffefb545ee45e9022971c3a7c07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
