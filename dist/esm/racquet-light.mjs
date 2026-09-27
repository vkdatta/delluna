export const name="racquet-light";
export const id="dl_07e36bd858de4ff79346";
export const url=new URL("../icons/racquet-light.svg?v=5eff29cf65e5811ce23943cb81d7f805342a2f84c72180842c020e9d8e7b1152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
