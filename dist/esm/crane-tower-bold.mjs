export const name="crane-tower-bold";
export const id="dl_6b93d90521a84ad2a6fb";
export const url=new URL("../icons/crane-tower-bold.svg?v=a7ea5193ba87f3f097e4ef435103afa4b6768ca34c8b1294cc8e51fddbe7a7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
