export const name="rest_area-fill";
export const id="dl_8c456b1bd247845f722b";
export const url=new URL("../icons/rest_area-fill.svg?v=0090d4e0ca63c36946ccb0056991e7690beb1cc81eb31b0aec0760dd2061864b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
