export const name="lucid_3-panel-left-dashed";
export const id="dl_79e64147dab54fa1a2e8";
export const url=new URL("../icons/lucid_3-panel-left-dashed.svg?v=2e30aadef68b9f8fe3476fc61a9bcc2360dc87a09af4866e1ea707063a70ca0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
