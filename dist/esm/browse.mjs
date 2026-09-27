export const name="browse";
export const id="dl_e2488faf941608d09c10";
export const url=new URL("../icons/browse.svg?v=b83003f00ef8fdf773e36bd3c80739318d8408942f87089691fe486e79b91f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
