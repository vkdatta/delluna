export const name="mic_alert";
export const id="dl_628bc06f6dcf44098987";
export const url=new URL("../icons/mic_alert.svg?v=ed18b7b6180d538063b655a039e72ff233e9a64d42a4e267d7af8b695861a93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
