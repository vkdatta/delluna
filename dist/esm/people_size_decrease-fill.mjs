export const name="people_size_decrease-fill";
export const id="dl_eea124d3d081e4e0b7ea";
export const url=new URL("../icons/people_size_decrease-fill.svg?v=980d2b48ebc5d6b6a8abc43abc0a53ee122a41b4378f75b66477a9e0544d4c38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
