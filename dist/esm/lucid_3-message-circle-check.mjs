export const name="lucid_3-message-circle-check";
export const id="dl_e665fa9c10e843c8a8bd";
export const url=new URL("../icons/lucid_3-message-circle-check.svg?v=ff2f7ea8fc55d2796f9478a4384e84cd5191df8623a9d6375b5b99dea7d34b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
