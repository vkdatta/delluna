export const name="hub";
export const id="dl_c9e361cd2ecef764682a";
export const url=new URL("../icons/hub.svg?v=e8c9cb4fad2f4f0db26c5454bb209c21858dcfc01402cbe406583c3f1d3d209b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
