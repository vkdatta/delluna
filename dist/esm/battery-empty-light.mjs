export const name="battery-empty-light";
export const id="dl_b90a0baf1de04ddb81cf";
export const url=new URL("../icons/battery-empty-light.svg?v=4926f1ee15b03bb39380dd6b9f65e1fbe017f44e6be437f42bf688b56346a823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
