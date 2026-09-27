export const name="crop_21_9-fill";
export const id="dl_36fed3386739da35cbe0";
export const url=new URL("../icons/crop_21_9-fill.svg?v=27010a25c4714a5118513af30b386c24fe5311a9dd4c9b387c44f22c29a28bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
