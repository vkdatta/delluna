export const name="lightbulb_2";
export const id="dl_bd3178df6f7820808ad5";
export const url=new URL("../icons/lightbulb_2.svg?v=302346c8b72e6aa6e9fa52b8bd895ac41182fd224cc27e9de0a850ed6e1752f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
