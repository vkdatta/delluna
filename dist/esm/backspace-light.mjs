export const name="backspace-light";
export const id="dl_3d117841a9544015984d";
export const url=new URL("../icons/backspace-light.svg?v=5998ab813b9007138c474b1bce243d6ce170ddccc8e6d887a14a83b29aff4c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
