export const name="tools_installation_kit";
export const id="dl_33105f56e9a1b7d340a0";
export const url=new URL("../icons/tools_installation_kit.svg?v=db1ed4157973f1e4c21da68ec3472bd245b2caaa457bcc4726f80affcac5197b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
