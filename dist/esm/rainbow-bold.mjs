export const name="rainbow-bold";
export const id="dl_2dc8ea47f84a44c7ac8f";
export const url=new URL("../icons/rainbow-bold.svg?v=3a39dad09c27a88df8ce3b3195e9cf9aeece07f18fb7f6c691d9ebaf1a03dd26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
