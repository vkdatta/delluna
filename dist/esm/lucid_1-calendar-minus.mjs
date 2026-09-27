export const name="lucid_1-calendar-minus";
export const id="dl_1bb2a29e18bc4993a5df";
export const url=new URL("../icons/lucid_1-calendar-minus.svg?v=e4a053d4b03333ea58954358c51f44578a3a324c55ff608145cf6add5114beac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
