export const name="genetics-fill";
export const id="dl_cf251fcc10105593524d";
export const url=new URL("../icons/genetics-fill.svg?v=56772190e8bcd0cbb215f262758065c6f9ba898537d13d014a6e8215d3b08bb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
