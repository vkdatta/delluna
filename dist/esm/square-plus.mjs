export const name="square-plus";
export const id="dl_ff975f123c664860871d";
export const url=new URL("../icons/square-plus.svg?v=b6920e22c0c0943fe7beb5f5bc059513dfce4e99befc329c704da2de88b303a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
