export const name="mountains-light";
export const id="dl_47d743ce875548e19eb7";
export const url=new URL("../icons/mountains-light.svg?v=67ddd24cdad546ea21904325c9d5441ad0f5a16eba44001065b1fa250939335d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
