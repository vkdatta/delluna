export const name="lucid_2-earth-lock";
export const id="dl_69f5703304dd4065979b";
export const url=new URL("../icons/lucid_2-earth-lock.svg?v=c6f52c6cfe266524f779689ead7f30124eca6a9d20ccb6181d3af9ee3e8927b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
