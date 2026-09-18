export const name="single_arrow-fill";
export const id="dl_53ca46c5860f46c2ad3d";
export const url=new URL("../icons/single_arrow-fill.svg?v=c8e23e9554ee8e0bcc82311dd4f2f763f0f7fc1cc2f912ed2a1eac7e198338b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
