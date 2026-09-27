export const name="basket";
export const id="dl_0d3d4bf1fd784077b842";
export const url=new URL("../icons/basket.svg?v=f613818deb1daab1e001134eee325682349a1caa651d7a2d49a26303ae6c91c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
