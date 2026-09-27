export const name="magnet-bold";
export const id="dl_7f41931ddb3a4bb3836f";
export const url=new URL("../icons/magnet-bold.svg?v=54c1fa06ee8be1f18a78590b6959d914c821abd793a87723ee27ae77edc11972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
