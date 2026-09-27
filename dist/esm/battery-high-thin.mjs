export const name="battery-high-thin";
export const id="dl_89f8b2faed034d63a958";
export const url=new URL("../icons/battery-high-thin.svg?v=298c7ab477f8cd51d91d6d573f6927bc5fe9acfac051736cb36c2422671b067c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
