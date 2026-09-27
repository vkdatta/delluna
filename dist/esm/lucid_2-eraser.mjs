export const name="lucid_2-eraser";
export const id="dl_61c57c16789845489ea9";
export const url=new URL("../icons/lucid_2-eraser.svg?v=ada2c3cd914a758b73ab5af64b6ece5071fbdc3090a4c04e9c2fbd93b35bdfde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
