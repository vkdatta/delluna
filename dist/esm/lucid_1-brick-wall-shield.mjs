export const name="lucid_1-brick-wall-shield";
export const id="dl_68ffe1d471634b47a1b7";
export const url=new URL("../icons/lucid_1-brick-wall-shield.svg?v=04e55a16aecf22bd5796098f3fec97948760559ef6ec198d34a5e11246a19823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
