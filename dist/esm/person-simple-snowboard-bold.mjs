export const name="person-simple-snowboard-bold";
export const id="dl_a73a4a73c62f4a4dba68";
export const url=new URL("../icons/person-simple-snowboard-bold.svg?v=69286f31fd31610c91e56b4349e628ea1e9e9d63b0a252fc112fbf175272961d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
