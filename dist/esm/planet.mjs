export const name="planet";
export const id="dl_c83ecb6c38bd4424ab64";
export const url=new URL("../icons/planet.svg?v=13ebc54dd7bef11fd9857083611c1b82666fb9e11bbc812bb892b6e053b2a680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
