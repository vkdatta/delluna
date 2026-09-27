export const name="switch_left";
export const id="dl_7bb4924705fdc50156f5";
export const url=new URL("../icons/switch_left.svg?v=cadcf81390540050513174fc3eabfcfc93b7486292210b06d4c5ff96bad435cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
