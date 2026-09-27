export const name="smiley-duotone";
export const id="dl_0a3788e27631dfdb2c3f";
export const url=new URL("../icons/smiley-duotone.svg?v=191982fccfcdc183102ab70bb565e82bba41b0aa30787772c041132d5fe92e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
