export const name="integration_instructions-fill";
export const id="dl_1bdc4e32506623a553f8";
export const url=new URL("../icons/integration_instructions-fill.svg?v=6dd3a6e6f640eecbb82cb15a8548ecf0b4b131425c89f4f1b6f930c427a2a27c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
