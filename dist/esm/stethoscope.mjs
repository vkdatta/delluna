export const name="stethoscope";
export const id="dl_47414772ab3b992e268c";
export const url=new URL("../icons/stethoscope.svg?v=93d2d423bba239d0927dd810f34d42508480d2d41bca7949d12a060b9216f8c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
