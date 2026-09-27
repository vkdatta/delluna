export const name="soccer-ball-light";
export const id="dl_406150840594953bf36e";
export const url=new URL("../icons/soccer-ball-light.svg?v=9a8e385ebcf38be46fb539b98b4e2ccb1fc9a8d9bd66531b1e05683eca198863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
