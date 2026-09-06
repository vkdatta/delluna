export const name="calendar-minus-thin";
export const id="dl_dcf417f6f64e4ba5b67f";
export const url=new URL("../icons/calendar-minus-thin.svg?v=ba9683d0f9b496c19b68becb94d3f8bf0d25fe7b8e57013991c98af76d6b5cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
