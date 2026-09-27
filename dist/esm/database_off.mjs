export const name="database_off";
export const id="dl_594cedc33f94037b5def";
export const url=new URL("../icons/database_off.svg?v=039e012bbe1aa9293bcfae9f16305b4db7e59d3ccfa48d7a1dce8a540f1a9cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
