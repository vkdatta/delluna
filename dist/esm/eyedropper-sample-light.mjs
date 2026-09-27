export const name="eyedropper-sample-light";
export const id="dl_9fc75366a5094f8baa34";
export const url=new URL("../icons/eyedropper-sample-light.svg?v=daa30e8c1c3871a7c5a9620fcb1687766a9b24aab6128f959ebf95127f01f99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
