export const name="align-top-simple-light";
export const id="dl_524eda9f09e142be9948";
export const url=new URL("../icons/align-top-simple-light.svg?v=bd6c439b411f6656c1d55e9540a3a3169a5293847ed5fcf0ab006c31e64ca0f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
