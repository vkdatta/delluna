export const name="not_started";
export const id="dl_1ab4c83aafa7a3e2729a";
export const url=new URL("../icons/not_started.svg?v=77e0c910f53d6b3779c8e83aaecd3487ad6fb150854026850e130c627769a3e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
