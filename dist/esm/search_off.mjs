export const name="search_off";
export const id="dl_8aa6478e575d86bdb8a9";
export const url=new URL("../icons/search_off.svg?v=2b52c566b24d81472dfac9195811ef55cec5f64b06c602a5346ee3108456fdd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
