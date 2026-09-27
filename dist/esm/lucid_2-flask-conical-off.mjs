export const name="lucid_2-flask-conical-off";
export const id="dl_667af1f6d19f45b8a6cd";
export const url=new URL("../icons/lucid_2-flask-conical-off.svg?v=0fe8ed92578411f55828b6b21c097fef0a69c459c1b132c29a875205c00debd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
