export const name="lucid_1-cloud-rain";
export const id="dl_db95ee0d37d94101b2fc";
export const url=new URL("../icons/lucid_1-cloud-rain.svg?v=d25d46593aa45eeb514eb29faa82af8d647b1584a505eed7fe0af2df9472da53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
