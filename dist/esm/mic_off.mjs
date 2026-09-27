export const name="mic_off";
export const id="dl_641fa8b259cc962fa45e";
export const url=new URL("../icons/mic_off.svg?v=305e53491373feddadf03111865d16372c4176c8463cea01dd875c57c4061738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
