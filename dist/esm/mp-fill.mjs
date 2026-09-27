export const name="mp-fill";
export const id="dl_ab764e82aa7c3c392d3f";
export const url=new URL("../icons/mp-fill.svg?v=a686c357434852cfc9ca2ebfdb3f0e1cac37c9b8397237aea9f01dfcf23295cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
