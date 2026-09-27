export const name="caret-up-bold";
export const id="dl_f46c881fddc7424f9b55";
export const url=new URL("../icons/caret-up-bold.svg?v=33aef884b63eb03a64174da8f414c5118086c9eba52cc1e987ae92ff321335c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
