export const name="user-circle-dashed-thin";
export const id="dl_9eaedd1d9d6046a97823";
export const url=new URL("../icons/user-circle-dashed-thin.svg?v=9bcbb925f93b958a92f3685ad9014f7d3f3db1042193bb975ad2c590665757b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
