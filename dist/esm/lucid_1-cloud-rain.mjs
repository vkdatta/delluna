export const name="lucid_1-cloud-rain";
export const id="dl_db95ee0d37d94101b2fc";
export const url=new URL("../icons/lucid_1-cloud-rain.svg?v=0383893d07f01f38e7ce713d96e7716260afc8cdc0eb45402dc0ce1de5889498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
