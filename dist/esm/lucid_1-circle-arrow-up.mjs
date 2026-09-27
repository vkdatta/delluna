export const name="lucid_1-circle-arrow-up";
export const id="dl_b7747da2acda4e3fbec8";
export const url=new URL("../icons/lucid_1-circle-arrow-up.svg?v=74b3e6dce4e98a220417e72df6274f450ada3aa3f5477a82ef20c053618768e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
