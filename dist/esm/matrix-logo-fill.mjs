export const name="matrix-logo-fill";
export const id="dl_8dd149b46761457cb281";
export const url=new URL("../icons/matrix-logo-fill.svg?v=4781bb27fdb8674e4d81cbc8f6abd56e9d8578e906c6514ac4ebfc7e0aa83d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
