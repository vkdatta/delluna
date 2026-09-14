export const name="assignment_returned";
export const id="dl_678b603c8cfa475fbe04";
export const url=new URL("../icons/A/assignment_returned.svg?v=fcaea53c3994e729af0fc2b21a8fa9a5959be4a0daaf8662ceb74c5d6c3ef227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
