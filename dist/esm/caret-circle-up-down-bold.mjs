export const name="caret-circle-up-down-bold";
export const id="dl_74ed0bc314cc411c9c09";
export const url=new URL("../icons/caret-circle-up-down-bold.svg?v=08b36090ea96e679f080e594b2a4eed54e436f50959ab5d05d6e78c44bfc0f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
