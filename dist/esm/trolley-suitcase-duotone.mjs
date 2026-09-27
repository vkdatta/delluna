export const name="trolley-suitcase-duotone";
export const id="dl_12b039bff11a79e8d086";
export const url=new URL("../icons/trolley-suitcase-duotone.svg?v=f3da4c5e7b385130ba5f230983763bd3ca4b110ce816d224383873f6dfd45f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
