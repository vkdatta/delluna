export const name="stop-circle-light";
export const id="dl_ba79b28061b08ade2c46";
export const url=new URL("../icons/stop-circle-light.svg?v=72250f154eb1ea1db71c4bbd4293b54586088a3bb8cf9769f0a218eb9c7c4662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
