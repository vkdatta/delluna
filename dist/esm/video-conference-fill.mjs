export const name="video-conference-fill";
export const id="dl_df2c38a51f7d93bde8aa";
export const url=new URL("../icons/video-conference-fill.svg?v=64cbccbbceb88d9d11e22739400922bc58217838a986b4c6a1dbf64e441487d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
