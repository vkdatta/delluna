export const name="text-align-right-light";
export const id="dl_215a09baab7282ef5646";
export const url=new URL("../icons/text-align-right-light.svg?v=3d777a3893f51b1f10083376533fe2c0398e05b872a0c5c63f932d88fd95daf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
