export const name="not_started";
export const id="dl_f821f4b8a4ac44c0b476";
export const url=new URL("../icons/N/not_started.svg?v=bedc0799df1493c7047d5f7ea1b6b77236b340b2304f541da488db4aec903438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
