export const name="text-align-left";
export const id="dl_a17a441eeef89fe152f1";
export const url=new URL("../icons/text-align-left.svg?v=df02ed37a612cf16427b1340fb2bb2e788fd60e066d823ef7ae656a908b40db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
