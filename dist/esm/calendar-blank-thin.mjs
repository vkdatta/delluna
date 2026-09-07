export const name="calendar-blank-thin";
export const id="dl_cbdd115466ca423d89a3";
export const url=new URL("../icons/calendar-blank-thin.svg?v=0ad24800c3a4376a5bf3f5d81394b795439cb82bf343c0870bb2f349d64e5909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
