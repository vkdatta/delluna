export const name="history_edu";
export const id="dl_67df10953cce7e6c80d7";
export const url=new URL("../icons/history_edu.svg?v=21ec2ed659a03f499a4b1a20a3a9e243fea1e17564ad8394f311b88a31a617c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
