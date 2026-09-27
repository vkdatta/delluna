export const name="arrow_menu_open-fill";
export const id="dl_ba18440c446ead86c263";
export const url=new URL("../icons/arrow_menu_open-fill.svg?v=737d79456d4d8aad1067359bf8458f9eabd3455587df3342c83f9584aac297f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
