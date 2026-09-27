export const name="webhook";
export const id="dl_c4f44283239a46559fb4";
export const url=new URL("../icons/webhook.svg?v=c63ab361b66ac7c5da26bc4d4af1290b1102bd95cf6058ab7ebb0c086d0f133b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
