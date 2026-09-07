export const name="eject-simple-duotone";
export const id="dl_085f9c67f0594a62a5e0";
export const url=new URL("../icons/eject-simple-duotone.svg?v=6f27ab8d459156ba10517f1858e187a9c0b0548446ac61e3011dd2ea9e1b3188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
