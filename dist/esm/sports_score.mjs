export const name="sports_score";
export const id="dl_d89d2e0188a47f26f003";
export const url=new URL("../icons/sports_score.svg?v=0124980309b52aee700b76922fe08083d7e36b28ab62055cb807e5d72fb0fe0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
