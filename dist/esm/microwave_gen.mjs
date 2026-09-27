export const name="microwave_gen";
export const id="dl_8acf59ebec96b92bfff6";
export const url=new URL("../icons/microwave_gen.svg?v=2d875afc7794aecf5c6e90d64ac3206e2f74314acee384f59c54ff7b3d4f4ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
