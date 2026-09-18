export const name="podium";
export const id="dl_ca018d475a594573b59e";
export const url=new URL("../icons/P/podium.svg?v=f8816b49533ac1ebeb073828aa7e42e915463298ed5fb6fa70120cb4dbc91bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
