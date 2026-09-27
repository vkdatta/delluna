export const name="beenhere";
export const id="dl_bc4a5d8867b406c046b8";
export const url=new URL("../icons/beenhere.svg?v=609ec6986e455913ad56d94b397331e3f27cce8d71e06b0a8f389bdf291db828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
