export const name="power-duotone";
export const id="dl_5b5721daf5c648078658";
export const url=new URL("../icons/power-duotone.svg?v=33b714742f1c1e8cedb1b02da194ca8e8b3f348c216776621aa98f9aefed3fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
