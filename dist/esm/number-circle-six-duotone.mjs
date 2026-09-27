export const name="number-circle-six-duotone";
export const id="dl_3db34140b7174ed7ba65";
export const url=new URL("../icons/number-circle-six-duotone.svg?v=ea6390378b7852d3b25b5dc68bb7c378948bff8cfd7723c603d302f32a6e98d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
