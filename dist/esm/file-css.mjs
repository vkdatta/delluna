export const name="file-css";
export const id="dl_ff07bd427972437c8136";
export const url=new URL("../icons/file-css.svg?v=94b539c17d175498258b142b65cc450758f944c0309ed0a43459dcee669553c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
