export const name="partly_cloudy_night-fill";
export const id="dl_1eed5199e22ad837e25f";
export const url=new URL("../icons/partly_cloudy_night-fill.svg?v=7838e0728dd15d9e7e7d9ca17084ada460d5d093f1c1b403a2cb8a64568dd3db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
