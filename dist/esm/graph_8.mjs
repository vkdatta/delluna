export const name="graph_8";
export const id="dl_35f2881139e44421376a";
export const url=new URL("../icons/graph_8.svg?v=369d26ec2b5404a1593985e15a870b9cda2a71075dbd1251a015886a386a73d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
