export const name="border_horizontal";
export const id="dl_0cb91a533b054d5345e8";
export const url=new URL("../icons/border_horizontal.svg?v=a1c36042bd0069a970745931900e6b5fe51454a1f5ba065bf493201d28119027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
