export const name="smiley-melting-thin";
export const id="dl_da3afc60dd868d02b897";
export const url=new URL("../icons/smiley-melting-thin.svg?v=83d73c53ab900f372d85d65a2e5624e194749084d5b2f45eb0b5765fe5f90e38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
