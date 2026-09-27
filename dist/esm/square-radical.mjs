export const name="square-radical";
export const id="dl_737d4a35d61c45faaff5";
export const url=new URL("../icons/square-radical.svg?v=f47b2674aa46ea42eec04f9a5d0bb5216c4cf30f9892e4a935194e9759da51e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
