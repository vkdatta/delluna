export const name="users-four";
export const id="dl_07a01f782c2c44468234";
export const url=new URL("../icons/users-four.svg?v=8f4ad6b760e39473ea8f693733ccb0cd7f705622da18a0081efbcb934826cfa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
