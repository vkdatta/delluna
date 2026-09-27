export const name="lucid_2-house";
export const id="dl_70db9e6c62604a458953";
export const url=new URL("../icons/lucid_2-house.svg?v=c2e442beeffb7f8f1c615f1654e1e508d3f07fcd339a8a6385dadad3768408cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
