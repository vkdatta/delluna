export const name="pan_tool-fill";
export const id="dl_f8cde2cbf65a1f018cbc";
export const url=new URL("../icons/pan_tool-fill.svg?v=52ee734e5d831f5a5db30aac15a30ac073abc24ffc2d70e79075bba3be718618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
