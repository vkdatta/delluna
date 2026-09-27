export const name="number-circle-three";
export const id="dl_6240562f22534a45a485";
export const url=new URL("../icons/number-circle-three.svg?v=4b02c1158c839cf6fd0547f0255c3e6eec7b019a2504ef682a267be775623681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
