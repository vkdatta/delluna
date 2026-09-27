export const name="x-square";
export const id="dl_5f025050aeb04fd27017";
export const url=new URL("../icons/x-square.svg?v=5e9e6513435163d7f52233deee60aacb2e3e8d7685aaf8c8e6c845ab29ce0ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
