export const name="cycle-fill";
export const id="dl_988af7c48076a0904925";
export const url=new URL("../icons/cycle-fill.svg?v=88ad8df66508e2efd725ed1fbe74c71aadcf69bcbf398857ee599500171e9823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
