export const name="hands-clapping-light";
export const id="dl_0608f23a3fb04ad0abf4";
export const url=new URL("../icons/hands-clapping-light.svg?v=6577aa63846ad68c81e9390d9e9a26e1ae57b7ce4187e81cd27f0bf9154c5313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
