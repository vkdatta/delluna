export const name="math-operations-thin";
export const id="dl_81fa4ee03d9346acbd68";
export const url=new URL("../icons/math-operations-thin.svg?v=4b56896a92a021d1bcaca236b8cf67c00f3c85a34bc6ed9fc3cd5fcc735dcd00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
