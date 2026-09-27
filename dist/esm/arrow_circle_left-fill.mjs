export const name="arrow_circle_left-fill";
export const id="dl_e83d3bb57879ff858fe0";
export const url=new URL("../icons/arrow_circle_left-fill.svg?v=e4e0bd5a949bae18d4c1eb13067b3fd49d082293cd104433bd63c1eb8474be7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
