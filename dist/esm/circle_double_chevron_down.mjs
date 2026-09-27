export const name="circle_double_chevron_down";
export const id="dl_151f965ab06b9eafc95d";
export const url=new URL("../icons/circle_double_chevron_down.svg?v=872c11266db6475ba0fd0fd71f79caeebbfab0c685a231fd2e2745881ad4d0e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
