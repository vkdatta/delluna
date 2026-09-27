export const name="lucid_1-clock-arrow-down";
export const id="dl_b15fb9055f6141068f8c";
export const url=new URL("../icons/lucid_1-clock-arrow-down.svg?v=4ebcd786814df8cdfb0759f46e394756c9ec426ae69b104c7f06771345b3ed17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
