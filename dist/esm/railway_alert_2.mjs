export const name="railway_alert_2";
export const id="dl_f9eec2b112b4097deb63";
export const url=new URL("../icons/railway_alert_2.svg?v=e26b62fb2ec899222b8f64c80190774c550b54d3b6c971f0d0743af03b746f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
