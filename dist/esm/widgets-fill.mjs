export const name="widgets-fill";
export const id="dl_91fb70ab65324b50be99";
export const url=new URL("../icons/widgets-fill.svg?v=3b00aacf71a19a2363e71eb26d4451f4c8ab2029e53caf095fd3d9cf96393ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
