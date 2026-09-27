export const name="oxygen_saturation";
export const id="dl_36f8dc8fbccb83e04fb8";
export const url=new URL("../icons/oxygen_saturation.svg?v=c25eeeb48001dc22b86be35ab1cb7eeeb9151351467acf6d025ba65b5cd7304f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
