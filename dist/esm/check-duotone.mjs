export const name="check-duotone";
export const id="dl_c1b4a6302a55491c9327";
export const url=new URL("../icons/check-duotone.svg?v=581385c1c40e6e618fe35f6ce2c39e81e0aab36a807ec64437424a5f56c8f240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
