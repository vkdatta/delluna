export const name="wave-sawtooth-light";
export const id="dl_4bf6bfd77a4e019d130f";
export const url=new URL("../icons/wave-sawtooth-light.svg?v=1834b7a5fd132acd641a21b326b1b7a406f26c7b59a16d042bee58207de1fc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
