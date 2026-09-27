export const name="lucid_2-fuel";
export const id="dl_b8e397ad74864fffa880";
export const url=new URL("../icons/lucid_2-fuel.svg?v=ae90668cc2f2c67450c5f0e799aa6f3832961dab661b39b179f476fc3c149bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
