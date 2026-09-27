export const name="workspace_premium-fill";
export const id="dl_38812798ca2c1c5553d7";
export const url=new URL("../icons/workspace_premium-fill.svg?v=1cc64e3153d330bb230fca09e94041fb192e5c5e0bd333098f62f55befa8f995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
