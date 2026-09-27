export const name="mobile_arrow_right-fill";
export const id="dl_2edbcd0976b125f39a42";
export const url=new URL("../icons/mobile_arrow_right-fill.svg?v=9fd696c731b61ff3082c21096b074fea2992f3cbe741bb8a1ffa658059c9b2ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
