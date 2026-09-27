export const name="highlight_mouse_cursor-fill";
export const id="dl_3189b230adf664dbc2ac";
export const url=new URL("../icons/highlight_mouse_cursor-fill.svg?v=b5fcae682ac00ff83a5b540586b8183c6f4ed291838b76c4be70596377baddc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
