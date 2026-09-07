export const name="baby-carriage";
export const id="dl_980fa824f85145c5ac31";
export const url=new URL("../icons/baby-carriage.svg?v=799b351dce15c4158b0f7b5f3809d7844d7a77ab5c8cc79cc1196951e2e68938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
