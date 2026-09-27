export const name="pencil-simple-line";
export const id="dl_4c330efbf5434b34b84b";
export const url=new URL("../icons/pencil-simple-line.svg?v=550f154f92b496d62ac861f9fb29b4847db28d8aec09b9fa1c164a2a639cf222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
