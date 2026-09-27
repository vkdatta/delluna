export const name="shuffle-light";
export const id="dl_33c13fa828c0bcdec6ea";
export const url=new URL("../icons/shuffle-light.svg?v=1ad1e8a397e51f17aeef52b6f819cbf46c976d28e5af53b6ab9f01564f082bdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
