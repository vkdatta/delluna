export const name="format_h5-fill";
export const id="dl_90a7ecfe7d164451af5e";
export const url=new URL("../icons/F/format_h5-fill.svg?v=ba45e69ae240ed37016e28acadaa99c761ddd7241b9293c8ca1c3f3aa27c5933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
