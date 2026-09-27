export const name="lucid_3-monitor-stop";
export const id="dl_7c209dcb486a4aeb8c85";
export const url=new URL("../icons/lucid_3-monitor-stop.svg?v=42e0aa5daec9a35311af6ce340e31e9c4b38c08409865bd648627a43e2068b65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
