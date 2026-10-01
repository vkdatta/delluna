export const name="keyboard_return-fill";
export const id="dl_cf8197b4a61869ecac2e";
export const url=new URL("../icons/keyboard_return-fill.svg?v=4abfb0438ed826641c441a23321a57fc9076cf3140a36e9bc5333f1282c7aa84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
