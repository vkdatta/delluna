export const name="add_to_queue-fill";
export const id="dl_462968996237b671c6ef";
export const url=new URL("../icons/add_to_queue-fill.svg?v=f43a01b339cfd93ff6cc4e08e75c73fc71dfe7d0649ea429f1a50c97af97c25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
