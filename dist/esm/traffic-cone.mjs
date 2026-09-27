export const name="traffic-cone";
export const id="dl_6da3c2b2972a40b99ba4";
export const url=new URL("../icons/traffic-cone.svg?v=7bf3b2ab6810b1d018defaed9719a08af3ea0688ea7f2d548cac9a1eda3f29e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
