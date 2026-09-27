export const name="gender-nonbinary";
export const id="dl_8392c6f613d84713abd5";
export const url=new URL("../icons/gender-nonbinary.svg?v=593674e6334d22d426a3fd2b3689c80901ec97c25bd677ca2a6f40e93a84413c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
