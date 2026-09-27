export const name="arrows-down-up";
export const id="dl_e5d1da6626df494a929a";
export const url=new URL("../icons/arrows-down-up.svg?v=112753f0b829c246d66c35cad2b42c890979fbda7a816f8452926871caee9870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
