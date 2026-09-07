export const name="number-nine";
export const id="dl_eaa5d179fd2e4c919fb3";
export const url=new URL("../icons/number-nine.svg?v=f97359eb6fdcf8569e9202e9c68cf16c3396b5b95e66e0f580165065639cdfe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
