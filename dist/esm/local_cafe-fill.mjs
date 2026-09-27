export const name="local_cafe-fill";
export const id="dl_8d83fd51cafe5dc0977f";
export const url=new URL("../icons/local_cafe-fill.svg?v=f145877425db0903dcf678b9ff31c11661169d61ca25cff628f597afac033b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
