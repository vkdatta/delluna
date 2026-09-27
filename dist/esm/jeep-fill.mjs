export const name="jeep-fill";
export const id="dl_af2054b0315d4122b700";
export const url=new URL("../icons/jeep-fill.svg?v=e9a8e03644bbc30a56f19d9642635795592074c300ab281704d604393418e55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
