export const name="eyedropper-bold";
export const id="dl_75628b9d7a4240e6b75f";
export const url=new URL("../icons/eyedropper-bold.svg?v=84cca4e37e3c813098a0b4dada7bfce670c56ad5ec0e924d0e3002e7218b7786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
