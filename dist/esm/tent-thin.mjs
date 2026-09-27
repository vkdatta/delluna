export const name="tent-thin";
export const id="dl_0661da1a47eb063c5cc8";
export const url=new URL("../icons/tent-thin.svg?v=6df18a0f9046dae43a15a56c903c75894ee35ce2e056b889b96d5cebf630098e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
