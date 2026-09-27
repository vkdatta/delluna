export const name="arrow_circle_left";
export const id="dl_c7a8c0964247de2d71fb";
export const url=new URL("../icons/arrow_circle_left.svg?v=45b98a726ebfdcf72896094fc7e9e850d9e37aad889842771d0bdade57b61d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
