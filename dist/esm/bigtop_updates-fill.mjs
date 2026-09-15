export const name="bigtop_updates-fill";
export const id="dl_586ebd6442b74c6dbe1b";
export const url=new URL("../icons/B/bigtop_updates-fill.svg?v=689c52dd4a8bd1792b5391355fa0e77bd6171c2171c8bca0e975501f9180b105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
