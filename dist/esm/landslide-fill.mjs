export const name="landslide-fill";
export const id="dl_2c7784c4785b3e96982d";
export const url=new URL("../icons/landslide-fill.svg?v=0f0b2b52db6483db3fe67049eaaca0aae8648dfffee33046ae5d0438a93ba024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
