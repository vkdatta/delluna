export const name="dinner_dining-fill";
export const id="dl_3f7a7d88a43938ace426";
export const url=new URL("../icons/dinner_dining-fill.svg?v=368eae46306bb5fbf09c21aa7f9cd0d61d9ce74bfdb43e1f83ee9356a32d7e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
