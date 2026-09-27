export const name="egg-crack-duotone";
export const id="dl_2f37c43bff414eb6a463";
export const url=new URL("../icons/egg-crack-duotone.svg?v=f67d4648d4b91fb7096ba95119d54e661f78668b34fd558be817de019ea7174d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
