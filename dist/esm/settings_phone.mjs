export const name="settings_phone";
export const id="dl_b704dce3db3cf0a0ea6e";
export const url=new URL("../icons/settings_phone.svg?v=cf349626cd2d30e4df4062dddb75568006e92d6a25ba62d987ec6db066d3b15c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
