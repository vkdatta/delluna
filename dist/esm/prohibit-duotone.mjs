export const name="prohibit-duotone";
export const id="dl_c766fe0281294383b803";
export const url=new URL("../icons/prohibit-duotone.svg?v=05fcc9bc4f61f6b106de6de3b42fa309a515aa1dc1e00b81a2359da098f9d291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
