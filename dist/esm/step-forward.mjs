export const name="step-forward";
export const id="dl_d11ce184e3a848dfb879";
export const url=new URL("../icons/step-forward.svg?v=fbdc07116d7fbf5b7661624972bacf30a89c5aaa9317b7ec6441cd6ac0dc7883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
