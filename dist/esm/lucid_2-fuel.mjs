export const name="lucid_2-fuel";
export const id="dl_b8e397ad74864fffa880";
export const url=new URL("../icons/lucid_2-fuel.svg?v=baba8e4f54ba3aa75c1d72e5f5a2ef231465e16cfcba7d76a66edef71a2944b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
