export const name="minor_crash-fill";
export const id="dl_460f85ad9ccc6c247cf0";
export const url=new URL("../icons/minor_crash-fill.svg?v=9131b89209d64d4a408491e292a22186165862da281c558d8662046443e70d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
