export const name="browse_gallery-fill";
export const id="dl_b2ee607d6c651a06fbf2";
export const url=new URL("../icons/browse_gallery-fill.svg?v=18d6816265dfddf0d2b516a023623940a87ef48b1b0281df4e98b86a2ff47a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
