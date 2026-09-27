export const name="lucid_2-heart-pulse";
export const id="dl_9f9f14d705d6423491dd";
export const url=new URL("../icons/lucid_2-heart-pulse.svg?v=5e156e7c4d53cfd8379bdbdfdaab265c47afa959976608aa04acefc949267862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
