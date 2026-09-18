export const name="turn_slight_left";
export const id="dl_74a583d348014dc691d8";
export const url=new URL("../icons/T/turn_slight_left.svg?v=d3d5eb875b7f1a4488af235e9b706d7b0cca20371cc4cefa60dfe4f7627ef557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
