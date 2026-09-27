export const name="chrome_reader_mode";
export const id="dl_d04353dc8a4d30d82c41";
export const url=new URL("../icons/chrome_reader_mode.svg?v=60c3f2f2abfe64cceec0b2e33c677a5cb5f4b78c93061b5418e9714074bdcb09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
