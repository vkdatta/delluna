export const name="table-thin";
export const id="dl_aa0a4bf935ac20533973";
export const url=new URL("../icons/table-thin.svg?v=154c201633ca26a66c334d0b1e3bcd6e80782f96ca78189ec40bec8c027a4ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
