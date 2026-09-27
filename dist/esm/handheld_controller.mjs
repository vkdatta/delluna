export const name="handheld_controller";
export const id="dl_13863b6ba8165e96da84";
export const url=new URL("../icons/handheld_controller.svg?v=97a239b55a9dbeb759ef46bc62b60562aa6fea6d74f8c9fed2d00fbe3b52e94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
