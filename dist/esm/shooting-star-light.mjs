export const name="shooting-star-light";
export const id="dl_64f48482701fa3e2ccfa";
export const url=new URL("../icons/shooting-star-light.svg?v=0eed43347294c207f0f3e434c542ee24040569a0464ec3e8ece3fcd81a37339f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
