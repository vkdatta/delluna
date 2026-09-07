export const name="lucid_2-lectern";
export const id="dl_7fc2b5b79c0140919812";
export const url=new URL("../icons/lucid_2-lectern.svg?v=fed794eda36384924e4947e48613b6486dd0c0092973c9871c41e9882fd2ad82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
