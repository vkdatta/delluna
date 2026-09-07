export const name="user-circle-dashed-fill";
export const id="dl_107c0cfa20844ee6834a";
export const url=new URL("../icons/U/user-circle-dashed-fill.svg?v=25f2e93cc3404eac3cada4b339e07b4b7d762c3a2e2a0209b1ee4fdf9ceb1071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
