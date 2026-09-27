export const name="set_meal-fill";
export const id="dl_6bec969dc39c0a75dbe0";
export const url=new URL("../icons/set_meal-fill.svg?v=051b042d7d44ee368cd8520091ab17707ac7cb5ec2e4c10e5b8935230d71c446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
