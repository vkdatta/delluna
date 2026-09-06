export const name="cell-signal-slash-fill";
export const id="dl_1f43fb4b2c2240618dfa";
export const url=new URL("../icons/cell-signal-slash-fill.svg?v=4513b006beed9ec532595d267a5f0e65cd57054e695e83a972e7e2cbfbed89ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
