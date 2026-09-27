export const name="dashboard_customize-fill";
export const id="dl_24476d17cd51faac1a16";
export const url=new URL("../icons/dashboard_customize-fill.svg?v=50be734b5f192ab45f7f8b627665698d5b99eeb15dc721d8c9bf5140252d7711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
