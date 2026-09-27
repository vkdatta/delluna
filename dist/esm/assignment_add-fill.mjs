export const name="assignment_add-fill";
export const id="dl_ebf307bb246a6c1937ec";
export const url=new URL("../icons/assignment_add-fill.svg?v=930d982da37234a620dd3cb45065c72144b25794d9a3766fa8fc0f9e2716fad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
