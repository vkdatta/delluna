export const name="airplane-tilt-light";
export const id="dl_1c228784838147e9b066";
export const url=new URL("../icons/airplane-tilt-light.svg?v=3486bc273ad7fc9138d8b70a830021e8c5e5136fa23b01f62b5cd6b9e03b69e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
