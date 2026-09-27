export const name="dice-two-bold";
export const id="dl_69192a9bf8f64760beb8";
export const url=new URL("../icons/dice-two-bold.svg?v=dd44c62b28fbdd210cf7ed9297b761b48021c20484faae4eb97eedd5b24b17f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
