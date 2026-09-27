export const name="lucid_1-clock-alert";
export const id="dl_fdd2d21248fe4457a855";
export const url=new URL("../icons/lucid_1-clock-alert.svg?v=1d907424ad4a655cedf04e2ed16edf8308ec82eb097acba4f075e66aa9789e09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
