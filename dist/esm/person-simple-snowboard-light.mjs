export const name="person-simple-snowboard-light";
export const id="dl_167275694684439fb854";
export const url=new URL("../icons/person-simple-snowboard-light.svg?v=69c97ace6281b830f2583f5506b2f5243238c0f47406db0bcefb1175f01e73d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
