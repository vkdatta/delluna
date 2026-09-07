export const name="umbrella-fill";
export const id="dl_0b80d91a9e14424ca47b";
export const url=new URL("../icons/U/umbrella-fill.svg?v=9ed07a79565a8bfa1706b7368ce636338062821ed4667db01a998b9bf751439e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
