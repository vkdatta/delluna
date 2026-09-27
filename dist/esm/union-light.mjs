export const name="union-light";
export const id="dl_64449647340959b664be";
export const url=new URL("../icons/union-light.svg?v=b0b819f151644f3066dbedab17258a495945848a7f11a927191f5c6b07890778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
