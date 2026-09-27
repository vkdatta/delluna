export const name="vinyl-record-bold";
export const id="dl_77a00d92ad74f31e1bad";
export const url=new URL("../icons/vinyl-record-bold.svg?v=3a764ad5f1c87dd4411b38931f225a892f5063f01c8bb96d17bc5a228d68ec18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
