export const name="star-of-david-duotone";
export const id="dl_4e501cf206603427ca2f";
export const url=new URL("../icons/star-of-david-duotone.svg?v=ec3433d5921580209ffe493bd75acf6e94c7b57961e4c687521bbb4339f1bb9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
