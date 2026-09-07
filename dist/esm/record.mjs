export const name="record";
export const id="dl_dbbb89ceda224bd7ae43";
export const url=new URL("../icons/record.svg?v=c6b664f9e2e96570fd909a89a57cb50fd91d62e37e002038396fe0b77981f3a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
