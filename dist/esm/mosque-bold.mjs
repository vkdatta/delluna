export const name="mosque-bold";
export const id="dl_38f28b2c0b644db8b1f5";
export const url=new URL("../icons/mosque-bold.svg?v=2c7062186a159aa41c289f6f9c98e87feabd19e4fc381971a2038fb48bab0cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
