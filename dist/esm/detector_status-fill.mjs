export const name="detector_status-fill";
export const id="dl_3b81c7b8577581a77262";
export const url=new URL("../icons/detector_status-fill.svg?v=d2fd15ec1fc37fb09df0c4b9ec1c498eef4c0d694f5ee471feea50a8a91c0938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
