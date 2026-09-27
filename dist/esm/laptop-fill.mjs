export const name="laptop-fill";
export const id="dl_9be45dd1e46f4fb782f6";
export const url=new URL("../icons/laptop-fill.svg?v=78416d481de68aa3a654bfa7c3889807b52ee2d79bb9b2fb3a8fd3e50fd25cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
