export const name="lucid_3-panel-left-right-dashed";
export const id="dl_638bab184b6847b6988e";
export const url=new URL("../icons/lucid_3-panel-left-right-dashed.svg?v=c3f04b6d136e40057f7250be06706a162a67197a83f2f13d5114fa6578bc5d53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
