export const name="problem";
export const id="dl_9823a54e385e11612960";
export const url=new URL("../icons/problem.svg?v=e542866315eb0fae7b48858b13aa74251d4b43bec37301f773ff69a5c7ae8ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
