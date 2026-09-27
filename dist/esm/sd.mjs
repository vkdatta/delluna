export const name="sd";
export const id="dl_19653de72f11ed47cd49";
export const url=new URL("../icons/sd.svg?v=14f03e67705bb9a5d77004240e2c09657b51a7835bd6b7b9804d46fd36a69c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
