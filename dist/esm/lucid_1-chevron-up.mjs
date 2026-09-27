export const name="lucid_1-chevron-up";
export const id="dl_a48732026acd4dd6adb3";
export const url=new URL("../icons/lucid_1-chevron-up.svg?v=5f7b0a95db6ec663e126e908c794f03c6fc14de4a0dac6716b339ff709c72a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
