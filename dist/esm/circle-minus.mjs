export const name="circle-minus";
export const id="dl_ea7aeffe5b3b10a926e0";
export const url=new URL("../icons/circle-minus.svg?v=23882439a4e073ad712eba72daa4a0c86a6ceba963be9873f111b28e1ba6ce7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
