export const name="pinch_zoom_in";
export const id="dl_368bf976b6cbb357b5b1";
export const url=new URL("../icons/pinch_zoom_in.svg?v=04454994dd514ee03f61dc5943ecd22a990b08789dd03613226c9079fe24047a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
