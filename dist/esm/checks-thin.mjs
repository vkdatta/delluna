export const name="checks-thin";
export const id="dl_9d8cc23325da46f49f99";
export const url=new URL("../icons/checks-thin.svg?v=e848de8aa4c7c6be40af934ce422d18b5790899929171c4d236ef9dba5b28c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
