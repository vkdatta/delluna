export const name="treasure-chest-fill";
export const id="dl_8f5d525505b7e5b63236";
export const url=new URL("../icons/treasure-chest-fill.svg?v=3f114fcc2e9c3dad2cf9911bfcd8df75ff697b375a83222800b882be82a34689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
