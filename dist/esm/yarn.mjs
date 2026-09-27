export const name="yarn";
export const id="dl_b9e62cc0b85e3e8f9614";
export const url=new URL("../icons/yarn.svg?v=e6eb725fb27a973146329c77895c63f82a1ddbdc5569008f7d1d53a489d6a96d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
