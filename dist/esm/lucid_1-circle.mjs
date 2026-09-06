export const name="lucid_1-circle";
export const id="dl_7f96e070089741039015";
export const url=new URL("../icons/lucid_1-circle.svg?v=74aeb0bfaf740064938ca10ca7cad8a9f76d12b1ad8252530f93d5a824a8fbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
