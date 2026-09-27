export const name="lucid_3-play";
export const id="dl_57d57262702f4aa799ec";
export const url=new URL("../icons/lucid_3-play.svg?v=2bd1e6513cac5822411142df2357f1d7b0ab352298eb66e85aa622b3f6cdbbcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
