export const name="data_check-fill";
export const id="dl_47c73af9b6d2dd5067ea";
export const url=new URL("../icons/data_check-fill.svg?v=07b131af3a58fe895f801c2d01df75e752b63e459a1ebe5e988dedbea5b68130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
