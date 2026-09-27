export const name="text-italic";
export const id="dl_f19b689e711cb3822070";
export const url=new URL("../icons/text-italic.svg?v=cca17ea778d6661955bbebb8c0b33371414d84f187cb2ee6eeefb72a9d4e0c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
