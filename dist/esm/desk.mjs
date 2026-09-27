export const name="desk";
export const id="dl_6c7bc253188d4c92b33d";
export const url=new URL("../icons/desk.svg?v=e8f9036695ca58d314ad605d3efc03511fee3cbae9bca2c446014cd7f5c17a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
