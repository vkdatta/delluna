export const name="lucid_3-panel-right-dashed";
export const id="dl_fede5f249a6d42529fc8";
export const url=new URL("../icons/lucid_3-panel-right-dashed.svg?v=8c45dae8a3bd4b537bf5c2384910cc74cffcc7c28237ee64fd128519e192b22a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
