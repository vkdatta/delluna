export const name="certificate-bold";
export const id="dl_2d658eea935c42f385ab";
export const url=new URL("../icons/certificate-bold.svg?v=7fc5bfba44a041a2970aa3ee11ac82a7ab84f35bf824e98020b8c73a2be5ba47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
