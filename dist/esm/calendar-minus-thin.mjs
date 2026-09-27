export const name="calendar-minus-thin";
export const id="dl_dcf417f6f64e4ba5b67f";
export const url=new URL("../icons/calendar-minus-thin.svg?v=b3c76d3fb8b1a55abb1129831218e87328ff0c7496e5105ce72afe93b3e187fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
