export const name="basket";
export const id="dl_0d3d4bf1fd784077b842";
export const url=new URL("../icons/basket.svg?v=4f528e76cfdb32ac5fa660505ac161fef775f52c3e4832554f1d0557d67ddd4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
