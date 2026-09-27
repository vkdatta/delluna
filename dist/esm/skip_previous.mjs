export const name="skip_previous";
export const id="dl_5c932df3af215b9f2499";
export const url=new URL("../icons/skip_previous.svg?v=aa08d33de224ece2535f3d124477f3e112da2a74802f63499e021f0c6e9acd33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
