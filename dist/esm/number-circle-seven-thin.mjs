export const name="number-circle-seven-thin";
export const id="dl_46fcc208133b44d2a17d";
export const url=new URL("../icons/number-circle-seven-thin.svg?v=911c8f3483184485a55a5d7caea0486164b4445d08b334f0db61ab4bd2b2cddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
