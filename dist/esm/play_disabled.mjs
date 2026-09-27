export const name="play_disabled";
export const id="dl_389e4253c10ac8433563";
export const url=new URL("../icons/play_disabled.svg?v=d4d1410a4aa1c215d5b0d01f39c685078e580674250422b0c488585595625941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
