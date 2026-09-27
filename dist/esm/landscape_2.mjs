export const name="landscape_2";
export const id="dl_21d59861eda2aa8a8f75";
export const url=new URL("../icons/landscape_2.svg?v=08b411973ec4034893eb700bbdec7bf3f58b01307932215344ec93d945592637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
