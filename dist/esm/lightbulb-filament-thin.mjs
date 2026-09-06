export const name="lightbulb-filament-thin";
export const id="dl_eee3685c44484e1cac95";
export const url=new URL("../icons/lightbulb-filament-thin.svg?v=e727c892ab05d07fc3b7c9fc9c6568b0b351024c42a448e0aefdb58bef52a8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
