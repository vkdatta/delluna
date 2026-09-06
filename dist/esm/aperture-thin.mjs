export const name="aperture-thin";
export const id="dl_61bc06ba408d41b589e2";
export const url=new URL("../icons/aperture-thin.svg?v=080db98b5dc880e0834eb508f9977a280fa45881d8b8701cd2e795c07a5ef22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
