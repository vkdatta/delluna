export const name="video_label";
export const id="dl_4fe81ae761bd23187e9d";
export const url=new URL("../icons/video_label.svg?v=4166fb696de04a1e3461aca0b4956b7fb6629df5fa415ed8809cf72484f4a1a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
