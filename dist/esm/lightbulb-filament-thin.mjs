export const name="lightbulb-filament-thin";
export const id="dl_eee3685c44484e1cac95";
export const url=new URL("../icons/lightbulb-filament-thin.svg?v=ce8d54707093bf3c2773ef1969468136a263e8ae1ed4ab23ed391b9bf84c6df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
