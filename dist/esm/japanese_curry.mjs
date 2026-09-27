export const name="japanese_curry";
export const id="dl_889897e9671f6a63dc76";
export const url=new URL("../icons/japanese_curry.svg?v=18aea73edfee851d2d0b31c2d75b8e3ed0da340d69a56284ec94494c647b92dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
