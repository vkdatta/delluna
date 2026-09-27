export const name="discord-logo-light";
export const id="dl_df0e4e3c0aff41699b89";
export const url=new URL("../icons/discord-logo-light.svg?v=becb2201a9b4c8cf466112202e06ca4d7f15f2f937c2bd47ce78bd6ee3eed51f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
