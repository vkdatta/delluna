export const name="ticket-minus";
export const id="dl_318fd31645f0491187f8";
export const url=new URL("../icons/ticket-minus.svg?v=c624c412c033ec0f623a3a19c5c8e32a3ac6538085ec50e6a0a6e91dacde14f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
