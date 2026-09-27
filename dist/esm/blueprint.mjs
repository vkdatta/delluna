export const name="blueprint";
export const id="dl_878bd2185cd942b08233";
export const url=new URL("../icons/blueprint.svg?v=75069bff639b3b36fe4856744d256cf3711b98ae67997e02c079119bf7c8571e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
