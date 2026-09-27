export const name="sailing-fill";
export const id="dl_566fae268cee39fb05dd";
export const url=new URL("../icons/sailing-fill.svg?v=3eece2e3c19389310158d6f1c036e53c6fb06ebdb9f736f9fea5d36e230f2468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
