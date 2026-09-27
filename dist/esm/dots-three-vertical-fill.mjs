export const name="dots-three-vertical-fill";
export const id="dl_c7329b2c456042b49081";
export const url=new URL("../icons/dots-three-vertical-fill.svg?v=60d48b1700d00f41b1bbbd83a5450407ed005a5b37c76f450957af3f322c8fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
