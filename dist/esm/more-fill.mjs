export const name="more-fill";
export const id="dl_b349478faa47a69a9b4c";
export const url=new URL("../icons/more-fill.svg?v=a678241b933362634b45e9245e8d121b87d49ff4354f520a37036e3644b31501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
