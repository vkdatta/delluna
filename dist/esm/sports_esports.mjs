export const name="sports_esports";
export const id="dl_f026bcaf94235d7ccf25";
export const url=new URL("../icons/sports_esports.svg?v=3f41a0c4e5842adbddc5e76c60a3ff4b840ba4119557100eb8b821df40c9efb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
