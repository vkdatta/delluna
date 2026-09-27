export const name="checks-light";
export const id="dl_60215b3674694eb38efe";
export const url=new URL("../icons/checks-light.svg?v=ca4b8d9d7a7a285a738f18ffcaeea1c76cd1fc72eb78ab3c09296c2dfe18ad8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
