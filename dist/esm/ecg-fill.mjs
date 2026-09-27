export const name="ecg-fill";
export const id="dl_314ba0600f2e8aa25753";
export const url=new URL("../icons/ecg-fill.svg?v=33bd081414534045fa7e11a11a5505722adc249026cf41d3d8f4e44f1e86837b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
