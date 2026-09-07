export const name="lightbulb-duotone";
export const id="dl_6fbd013d61e24632a626";
export const url=new URL("../icons/lightbulb-duotone.svg?v=498e42a870d662fd36e7dba9b53fc82c3cdbe05452ad0534f3de8033dd07a2a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
