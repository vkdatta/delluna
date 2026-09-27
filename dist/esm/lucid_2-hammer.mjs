export const name="lucid_2-hammer";
export const id="dl_7e261ef9e1ab460da694";
export const url=new URL("../icons/lucid_2-hammer.svg?v=7ab1a32d7a88162a371ba9db70126e52c9ed9ca88561b371685ba84a3fa9ffd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
