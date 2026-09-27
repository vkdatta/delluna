export const name="cell-signal-medium-fill";
export const id="dl_86938aed5842463eb843";
export const url=new URL("../icons/cell-signal-medium-fill.svg?v=4168f27d13e5c482eeaedcef8999ab38445a9c49d4b3270c13dc2804e638860f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
