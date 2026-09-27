export const name="skype-logo-duotone";
export const id="dl_20a95b70912231ca17c2";
export const url=new URL("../icons/skype-logo-duotone.svg?v=61fd3fc9a3ca1dfc567234de27d4a20a6fa49ea14e21cc3df94b00b698ea35d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
