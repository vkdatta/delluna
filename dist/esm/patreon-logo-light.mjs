export const name="patreon-logo-light";
export const id="dl_d9b653e2aaa948bf9b56";
export const url=new URL("../icons/patreon-logo-light.svg?v=ae37c6c4b2da7d410fcffbfb868f331ac7c7eacbbbc812cbefbc7c5f33fb5513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
