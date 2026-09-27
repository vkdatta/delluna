export const name="stylus_highlighter";
export const id="dl_7183f50290af9d045fba";
export const url=new URL("../icons/stylus_highlighter.svg?v=ca2cb56f57807d0d11952d7084424750789e926113fd269b9a43e7231a4065ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
