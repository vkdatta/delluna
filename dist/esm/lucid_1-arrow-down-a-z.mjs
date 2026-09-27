export const name="lucid_1-arrow-down-a-z";
export const id="dl_539d9cd79e1740d3bde5";
export const url=new URL("../icons/lucid_1-arrow-down-a-z.svg?v=890960555cc2931778636746e0f2143484529241d7192deae4884fa6cf42a4bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
