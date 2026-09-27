export const name="twitch-logo-light";
export const id="dl_4846527d8c9859e09c5a";
export const url=new URL("../icons/twitch-logo-light.svg?v=9d38db2e2d14066252cc16117076ab60a62fece701d55b3e99c4b703883622f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
