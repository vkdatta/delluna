export const name="file-code-fill";
export const id="dl_7126e3e5ea0e4591a12c";
export const url=new URL("../icons/file-code-fill.svg?v=127044e7395681d5306c7553cc2287e16c63f9d4578f4f6fe7710f277e5b7624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
