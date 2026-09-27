export const name="box-arrow-down-light";
export const id="dl_6a71c7b9a3f641189519";
export const url=new URL("../icons/box-arrow-down-light.svg?v=bd88be66c458997d39996be4bafa1c6c46cb461ddd44368ab0d01e2c9e3b82a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
