export const name="lucid_2-list-start";
export const id="dl_cdd141ad8118466a908e";
export const url=new URL("../icons/lucid_2-list-start.svg?v=f5a28aad350235d16e6fdb5a1842cf56433c46881aea064b814b485da9b97555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
