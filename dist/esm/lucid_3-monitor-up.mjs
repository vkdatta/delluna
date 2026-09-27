export const name="lucid_3-monitor-up";
export const id="dl_740f1a251d3844789d2f";
export const url=new URL("../icons/lucid_3-monitor-up.svg?v=ddad028791567548a4ed5e6f611728c79d4483a88b8f0c08afbb8385465117f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
