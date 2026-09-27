export const name="navigation";
export const id="dl_3ed8f0e55b1e8b52f76c";
export const url=new URL("../icons/navigation.svg?v=35207c6fe8ee7bb89950f2b62153955aed791aa637a70d5b0e6f013453b9a406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
