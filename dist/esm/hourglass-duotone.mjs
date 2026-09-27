export const name="hourglass-duotone";
export const id="dl_4cff7c46b85846b4a37d";
export const url=new URL("../icons/hourglass-duotone.svg?v=da1ee37ef59ae65f1f70b0ce7f85f7d16bf33b9e6504c9c140a3c54c877fc5e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
