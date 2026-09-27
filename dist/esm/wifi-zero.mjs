export const name="wifi-zero";
export const id="dl_75a318ca98e144b8b154";
export const url=new URL("../icons/wifi-zero.svg?v=e17578e9402069b0eae18f94b71edd99a287598ff097848176a3adf7c3109cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
