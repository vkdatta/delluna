export const name="figma-logo-thin";
export const id="dl_17b63b8f696b4318a346";
export const url=new URL("../icons/figma-logo-thin.svg?v=c28ae038c955b5c9f57b7980ca953686cd654c1f357c1858fc1c26b9a146eb39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
