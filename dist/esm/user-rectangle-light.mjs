export const name="user-rectangle-light";
export const id="dl_6946fba9bff958d07be2";
export const url=new URL("../icons/user-rectangle-light.svg?v=51fca4620af5bd388f48b2a3ea5c85227992288fca2490e03769438b4e8a5ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
