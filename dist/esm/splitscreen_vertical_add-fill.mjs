export const name="splitscreen_vertical_add-fill";
export const id="dl_63674dd203a53944aa0c";
export const url=new URL("../icons/splitscreen_vertical_add-fill.svg?v=ccf00d4056b36878ae17c6788ed059888a9286cc4b5c5f3fa439180fd49c60c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
