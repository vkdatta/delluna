export const name="rectangle-thin";
export const id="dl_f445e38a1b4d404a8a7a";
export const url=new URL("../icons/rectangle-thin.svg?v=bca36817515b04196fd7accd30d0ed337177470215076a0b5c365f9e398a388a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
