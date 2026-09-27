export const name="assignment";
export const id="dl_27fd93b2043611048201";
export const url=new URL("../icons/assignment.svg?v=d07950b71b2831c7ae6821bed4111dbfbc771bf66396377e2da22a5823dd3101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
