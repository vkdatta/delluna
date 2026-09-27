export const name="lucid_2-fuel";
export const id="dl_b8e397ad74864fffa880";
export const url=new URL("../icons/lucid_2-fuel.svg?v=bf354f8bd3d5f940365025154ec74dd7c97002e34f8d8fada865d761beff8f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
