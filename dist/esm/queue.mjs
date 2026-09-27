export const name="queue";
export const id="dl_b8ec22f82225465f8a4b";
export const url=new URL("../icons/queue.svg?v=fff4d63ee357c0633f1fe31b9dbedb0c320259e4f867c2ea4185c11d28fdf57b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
