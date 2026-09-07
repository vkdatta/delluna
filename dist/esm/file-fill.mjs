export const name="file-fill";
export const id="dl_8deec1ad0630484fa9ed";
export const url=new URL("../icons/file-fill.svg?v=d6fe00691e45b5e9b87ccc5a8fc9022485935408167ab1234817915df4fd1ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
