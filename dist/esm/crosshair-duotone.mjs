export const name="crosshair-duotone";
export const id="dl_c3887d538a824b7aadfc";
export const url=new URL("../icons/crosshair-duotone.svg?v=0ec929c7d60c416ccdbf7956f817123567ebd4554bcf52cff5acb3e35fbb7623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
