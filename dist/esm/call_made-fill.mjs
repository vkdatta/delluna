export const name="call_made-fill";
export const id="dl_60fbfcbb257a72d4e161";
export const url=new URL("../icons/call_made-fill.svg?v=8691c51650d58e70ca16af7ee51e4e267d9addeea9b0922074da0edaf59f966e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
