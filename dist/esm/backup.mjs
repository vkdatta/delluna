export const name="backup";
export const id="dl_502f031d28dcf3239837";
export const url=new URL("../icons/backup.svg?v=27967e5e3af51bfb38734fd324458b1e9f56d1360a7a59e82edad9997533e6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
