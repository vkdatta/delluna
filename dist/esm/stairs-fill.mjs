export const name="stairs-fill";
export const id="dl_85587ad519b4b4782d89";
export const url=new URL("../icons/stairs-fill.svg?v=9b824deef8a5a681fca014723ff58f2b2a82e27f0e710e6afe5a375e782717cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
