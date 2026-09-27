export const name="webhook";
export const id="dl_c4f44283239a46559fb4";
export const url=new URL("../icons/webhook.svg?v=aedfa4cd109554d429e167e085056f0465bdccab731dddc07143c316a894aaf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
