export const name="table-2";
export const id="dl_16f281233c6d4d81bfd6";
export const url=new URL("../icons/table-2.svg?v=9dc35f04ccb2a1b7a4cbd9b0a589751a4dc74143fc1ce734f4dfc49878a4503b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
