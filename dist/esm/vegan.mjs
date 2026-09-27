export const name="vegan";
export const id="dl_2cc53eda50f94ec6911f";
export const url=new URL("../icons/vegan.svg?v=5a54f6c72093613ae05cee190dd487360da8728302a4b0666b1a7db7720dd009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
