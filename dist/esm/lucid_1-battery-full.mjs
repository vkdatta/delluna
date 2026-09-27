export const name="lucid_1-battery-full";
export const id="dl_5ccd9ae0a467453cba38";
export const url=new URL("../icons/lucid_1-battery-full.svg?v=62301db1f684e767c80386ecde07c64931acaf95a6e167724ada0d510bd8c4a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
