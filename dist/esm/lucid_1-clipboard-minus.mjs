export const name="lucid_1-clipboard-minus";
export const id="dl_070dfe107d71405a80f1";
export const url=new URL("../icons/lucid_1-clipboard-minus.svg?v=5231048d461f2913760428dd81248043828bcccb0f383eeeb7d77e11e6514f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
