export const name="phone_bluetooth_speaker-fill";
export const id="dl_4ed17d83983589de5ccd";
export const url=new URL("../icons/phone_bluetooth_speaker-fill.svg?v=813b6d0699b966d350726718b96a04847e18b2ebb976b9d10cbd1999cde9b538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
