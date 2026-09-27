export const name="vertical_split";
export const id="dl_9aebea791daa4c1deb25";
export const url=new URL("../icons/vertical_split.svg?v=32591ebfc84ac9c806912e98cb652161a273705ec1334967a78436910210cfc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
