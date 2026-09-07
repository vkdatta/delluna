export const name="lucid_3-settings";
export const id="dl_a413bcedb4d94f1faae7";
export const url=new URL("../icons/lucid_3-settings.svg?v=71a8ba00939b3bee55709853b084ba3c8ab964878358c371f2958bb2531855ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
