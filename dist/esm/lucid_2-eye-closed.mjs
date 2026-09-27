export const name="lucid_2-eye-closed";
export const id="dl_0d7fd46ed8344c0a87cd";
export const url=new URL("../icons/lucid_2-eye-closed.svg?v=06eb99905dc847214008b0ce7586493dae443fc04e07863a360da2267df25b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
