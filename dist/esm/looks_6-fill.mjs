export const name="looks_6-fill";
export const id="dl_813f7a4f6beea4940452";
export const url=new URL("../icons/looks_6-fill.svg?v=dcf2846166da890897572728e2e7df339af6a9dcc68abfab5a204c85c4b112c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
