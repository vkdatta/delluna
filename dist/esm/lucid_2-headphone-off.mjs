export const name="lucid_2-headphone-off";
export const id="dl_ceca4958b4924175bde7";
export const url=new URL("../icons/lucid_2-headphone-off.svg?v=44795db3921c3c407de8363e7199b9661aec629cd478b230acef8b9d7a775455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
