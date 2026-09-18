export const name="solo_dining-fill";
export const id="dl_7f794209668c42a6adf6";
export const url=new URL("../icons/solo_dining-fill.svg?v=15e612873089e8a5a75dd2fe3796df03018224806401591a5ec034449b297dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
