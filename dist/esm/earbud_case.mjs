export const name="earbud_case";
export const id="dl_c52ab6f2beb199745345";
export const url=new URL("../icons/earbud_case.svg?v=57efa5f2ce785211ab9eaabe19fae895606d61372f9cacadef0c520ecc1bc994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
