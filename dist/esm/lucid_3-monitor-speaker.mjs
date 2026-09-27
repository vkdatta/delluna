export const name="lucid_3-monitor-speaker";
export const id="dl_255bedd8f77349cea81e";
export const url=new URL("../icons/lucid_3-monitor-speaker.svg?v=49e03c949d511b65ad045a4e6089f4c094e920189de6750868ea68a546fe84b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
