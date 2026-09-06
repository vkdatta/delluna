export const name="phosphor-logo-bold";
export const id="dl_1ef7d55b9c6349e3b4ef";
export const url=new URL("../icons/phosphor-logo-bold.svg?v=1e7bcc54bd04c5292ccec0b598429e3596648cf1acca1dc5c27cb3d0b431db8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
