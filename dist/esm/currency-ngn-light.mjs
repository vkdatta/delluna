export const name="currency-ngn-light";
export const id="dl_a29ae81a7d1a4ab9b755";
export const url=new URL("../icons/currency-ngn-light.svg?v=b7428295075db38c0bf50b8f96efaf9a12fe748d013e826515bee4e9e351dd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
