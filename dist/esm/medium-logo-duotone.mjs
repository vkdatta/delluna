export const name="medium-logo-duotone";
export const id="dl_cec95fd0621f48fbb18d";
export const url=new URL("../icons/medium-logo-duotone.svg?v=4de059cec114f9ece834f80386e9603d866510f38cc9e7fff637092c231d570c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
