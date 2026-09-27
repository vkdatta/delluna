export const name="lucid_2-list-check";
export const id="dl_1e284780057f4cf5a3fd";
export const url=new URL("../icons/lucid_2-list-check.svg?v=08617908157682bddcd7f402af8f14be4692603e72cd3e864b968e3a19611c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
