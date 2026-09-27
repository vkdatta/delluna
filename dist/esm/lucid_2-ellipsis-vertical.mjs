export const name="lucid_2-ellipsis-vertical";
export const id="dl_9b96c2d1fa304bd48a05";
export const url=new URL("../icons/lucid_2-ellipsis-vertical.svg?v=a00141f3f43effb09318b8b5df1a74dc0fd87369abc5b64c6c24f52cfc71850b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
