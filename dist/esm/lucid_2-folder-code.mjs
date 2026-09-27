export const name="lucid_2-folder-code";
export const id="dl_5c3964d479e44153b3b0";
export const url=new URL("../icons/lucid_2-folder-code.svg?v=f0962664b8a2a3627bca54a13ae8df4e9d373b588b9a4707d3b91f308a15f10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
