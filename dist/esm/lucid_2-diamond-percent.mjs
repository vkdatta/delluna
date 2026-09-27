export const name="lucid_2-diamond-percent";
export const id="dl_56125e3c902144eba676";
export const url=new URL("../icons/lucid_2-diamond-percent.svg?v=1afe34961d48fb39798acf755936ea823a2e3050bbba98ec4531096354db861e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
