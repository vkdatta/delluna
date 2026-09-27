export const name="award_star";
export const id="dl_dc786ec85c8d3e467cb0";
export const url=new URL("../icons/award_star.svg?v=caef71afe2064fa8cf6d7f72504078c722aeb4cf30f66916a49c229442241507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
