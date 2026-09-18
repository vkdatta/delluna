export const name="nest_wake_on_approach";
export const id="dl_8628feb4f70b4050a6bc";
export const url=new URL("../icons/N/nest_wake_on_approach.svg?v=f9fc40179f3c6087afa1d85563d135976fe9c5cde44c0caacd59be6e37c29cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
