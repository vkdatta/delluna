export const name="railway_alert_2";
export const id="dl_0d964fc3f2674158aafe";
export const url=new URL("../icons/R/railway_alert_2.svg?v=20420d51c5a32ace03ad70e526ae3082575bd5e825f2c9e06dab808f46ce972b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
