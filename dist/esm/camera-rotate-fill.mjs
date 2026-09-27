export const name="camera-rotate-fill";
export const id="dl_bc653e43fc764f3995a8";
export const url=new URL("../icons/camera-rotate-fill.svg?v=9e24cd39ad0cfc34963a3f0dd0eb9bfd304030f856cb0a0d298f6ca20210194f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
