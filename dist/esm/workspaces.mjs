export const name="workspaces";
export const id="dl_cc7938248a5499c91cd7";
export const url=new URL("../icons/workspaces.svg?v=3f3a8f522f21c3e19e44ce79607aa835c712603008710b04601eb6f4417f9be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
