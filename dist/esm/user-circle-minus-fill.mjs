export const name="user-circle-minus-fill";
export const id="dl_5575452a46436e347479";
export const url=new URL("../icons/user-circle-minus-fill.svg?v=dae990c97dab1b13396dfa41588c088cc073fa48a523badda162a593bf75dd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
