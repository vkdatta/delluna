export const name="steam-logo-thin";
export const id="dl_ae164724aa2132e3a645";
export const url=new URL("../icons/steam-logo-thin.svg?v=99845fec45c32522d8f0c8ae73a0946f4f14100a53b3adf509709a87e0ce3fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
