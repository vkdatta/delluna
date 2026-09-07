export const name="google-cardboard-logo";
export const id="dl_1484685f74974790b9ab";
export const url=new URL("../icons/google-cardboard-logo.svg?v=d377a05c04cc6f8bb005628a60c0f812afe46e335a0a653e3a9522c786d819fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
