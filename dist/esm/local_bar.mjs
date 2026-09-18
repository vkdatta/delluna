export const name="local_bar";
export const id="dl_26270598af514d6184dc";
export const url=new URL("../icons/local_bar.svg?v=9e68eecb42cfd8e88055b08eb1bf0910525fb9eee767024e813a60c022639034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
