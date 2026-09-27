export const name="battery-vertical-empty-fill";
export const id="dl_7461c42e2c0149b28113";
export const url=new URL("../icons/battery-vertical-empty-fill.svg?v=38df71c677e96d717793035a55645da62ec2f5f1910856a9a296bf4bd9b3d47f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
