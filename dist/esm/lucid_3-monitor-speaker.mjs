export const name="lucid_3-monitor-speaker";
export const id="dl_255bedd8f77349cea81e";
export const url=new URL("../icons/lucid_3-monitor-speaker.svg?v=92c87882992b9bdd0b164a855bf1683abb36e17a292b417fec169933cb4ecd4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
