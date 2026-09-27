export const name="trending_up";
export const id="dl_f8607ef6ee659a52bb30";
export const url=new URL("../icons/trending_up.svg?v=99dd03d94922245fa3b821bdbc0302d26b9f9f250a7bd439a23be1bd9a4e77b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
