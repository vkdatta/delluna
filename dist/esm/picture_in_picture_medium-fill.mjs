export const name="picture_in_picture_medium-fill";
export const id="dl_7c91711115b71422aba6";
export const url=new URL("../icons/picture_in_picture_medium-fill.svg?v=0f997b2f132f6083c33347d56ce980449fe35072d8ca95f4cadb719663334963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
