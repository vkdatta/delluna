export const name="lucid_1-clock-arrow-left";
export const id="dl_5b33ccf38ced4bb7becd";
export const url=new URL("../icons/lucid_1-clock-arrow-left.svg?v=0e2fca21d876ff2fa73d6ed8193d5d5b59fa37065aaab6d6dbcc8903107bb6b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
