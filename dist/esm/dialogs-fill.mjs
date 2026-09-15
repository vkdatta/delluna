export const name="dialogs-fill";
export const id="dl_7af65498802947ee8a87";
export const url=new URL("../icons/D/dialogs-fill.svg?v=905bc6ee6b7abb0a1c3754833a62ae5ea0474a371b87f4b13926d068a9efb736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
