export const name="home_repair_service";
export const id="dl_79385e4c698a45c787a1";
export const url=new URL("../icons/H/home_repair_service.svg?v=e6afd9e8c683bb7fc309d9323496a8899304d8786b0ce0fdbdbedf8fd2a44f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
