export const name="dev-to-logo-fill";
export const id="dl_be9a9fc7bc3c4ad48bb8";
export const url=new URL("../icons/dev-to-logo-fill.svg?v=97009f54da7f95cbbe9c623d53d484d996487077d483a3db99894e442b9989ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
