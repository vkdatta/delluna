export const name="crop_landscape-fill";
export const id="dl_80762f5b5a0861dba76a";
export const url=new URL("../icons/crop_landscape-fill.svg?v=4c726e37a2c7627ace0a7ef18c3b0ef5faa36498a9276ba79317e33fe495dd4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
