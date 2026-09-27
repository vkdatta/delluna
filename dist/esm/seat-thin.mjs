export const name="seat-thin";
export const id="dl_ccd80f54a391e6d50d5f";
export const url=new URL("../icons/seat-thin.svg?v=e089b4473f60a46011ec05776e145efd888c951c3c547df16c978b907edd40b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
