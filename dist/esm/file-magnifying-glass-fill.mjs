export const name="file-magnifying-glass-fill";
export const id="dl_a61b3776235c411aa9bc";
export const url=new URL("../icons/file-magnifying-glass-fill.svg?v=706ec4541bf1b2e8d4f401151a154e08dbaa187ea3b7640bb8b8d1431a3db686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
