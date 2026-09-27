export const name="aperture-duotone";
export const id="dl_4d4345b83b824ee4bd8c";
export const url=new URL("../icons/aperture-duotone.svg?v=2922c22cba899dacb737e3aed6e5f87632636ef3882d79d921c0a06965a70f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
