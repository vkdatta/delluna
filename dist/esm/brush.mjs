export const name="brush";
export const id="dl_a31917ce092d4328ab15";
export const url=new URL("../icons/brush.svg?v=be12ad5d1deba783a9bf84a172393cf5003d647d4e3c629c25b1b2bf55ea0f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
