export const name="keyboard_backspace-fill";
export const id="dl_3532a1ecef6d317749c4";
export const url=new URL("../icons/keyboard_backspace-fill.svg?v=222d2899618a377c2b4be9b9ddada925ce97b89b98c153b2072426fe69744031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
