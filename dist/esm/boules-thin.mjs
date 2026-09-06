export const name="boules-thin";
export const id="dl_c71c5dab83bf44139de1";
export const url=new URL("../icons/boules-thin.svg?v=041a36f8a7586590ad2615896c6285097849e5da7df5649241d78324bf3ea0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
