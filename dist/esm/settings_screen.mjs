export const name="settings_screen";
export const id="dl_ccb693de8aa94df6da52";
export const url=new URL("../icons/settings_screen.svg?v=be0973a7397a4e1d34805858dc90e092f3c42e2937c1215d38383cd6e7fa25a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
