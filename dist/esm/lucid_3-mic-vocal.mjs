export const name="lucid_3-mic-vocal";
export const id="dl_4468c680e4d646b38859";
export const url=new URL("../icons/lucid_3-mic-vocal.svg?v=1720189f8aa0e6250879ea072f32b07756859a678d7da72b08c00e41c7ee168a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
