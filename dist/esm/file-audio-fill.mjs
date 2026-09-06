export const name="file-audio-fill";
export const id="dl_6dbc9c30df7c4e5e8e4c";
export const url=new URL("../icons/file-audio-fill.svg?v=835c6bfde42e68d716db3dd4db0e02843f6a7bd704a4377287a4b022d80ace7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
