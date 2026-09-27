export const name="step-forward";
export const id="dl_d11ce184e3a848dfb879";
export const url=new URL("../icons/step-forward.svg?v=52e526a7259b9428e03ffd32364e78c135c4c161f91006e6a2a3a81267baceb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
