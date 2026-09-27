export const name="tilt_arrow_down-fill";
export const id="dl_5c438272f1bd7affb14a";
export const url=new URL("../icons/tilt_arrow_down-fill.svg?v=a31e5d16ab0cf78c7a5853a52b265cae08f4c4017bf1fd1f061ab154e96b7792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
