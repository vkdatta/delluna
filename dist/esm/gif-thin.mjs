export const name="gif-thin";
export const id="dl_6b8000722b384f8fbff6";
export const url=new URL("../icons/gif-thin.svg?v=c16a00044be720983c5fe76144a1c696417506a54e084fbf500e111be65e9250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
