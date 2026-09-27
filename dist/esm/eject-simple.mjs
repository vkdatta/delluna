export const name="eject-simple";
export const id="dl_6b4b5a55b9ef45a6907c";
export const url=new URL("../icons/eject-simple.svg?v=d6041282c353377c3f92ce7e77bb1c18bec8f57e23dfe1a7bb2efea080b8e6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
