export const name="lucid_3-message-square-plus";
export const id="dl_7553bae8b38140908491";
export const url=new URL("../icons/lucid_3-message-square-plus.svg?v=7f56237cbddf161cb9ddd5b477d33624522d102a28e9fe0c2954d409b0021d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
