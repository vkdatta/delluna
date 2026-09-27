export const name="nest_connect";
export const id="dl_d06153352a2f08fed6ed";
export const url=new URL("../icons/nest_connect.svg?v=b2b3e6f8a050907e7e6e37ed04fb8c7b262735e10fe4873aebeca0a0d5abf07e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
