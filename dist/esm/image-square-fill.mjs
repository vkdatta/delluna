export const name="image-square-fill";
export const id="dl_74d585157b4b4853b06a";
export const url=new URL("../icons/image-square-fill.svg?v=01b060f51252dace7434d57ee79f7b2625326f1c65743b4b04e4d082e4873d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
