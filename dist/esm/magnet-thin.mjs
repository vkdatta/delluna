export const name="magnet-thin";
export const id="dl_0fcfd03f38184811820e";
export const url=new URL("../icons/magnet-thin.svg?v=74cf0d24e9bfc1242e79c3da8ac84176524c7a8b633cb3ec06fbb4765c23a7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
