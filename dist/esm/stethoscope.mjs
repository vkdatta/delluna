export const name="stethoscope";
export const id="dl_67df1d5074f24c84a2ff";
export const url=new URL("../icons/S/stethoscope.svg?v=93d2d423bba239d0927dd810f34d42508480d2d41bca7949d12a060b9216f8c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
