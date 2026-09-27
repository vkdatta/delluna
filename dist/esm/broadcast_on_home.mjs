export const name="broadcast_on_home";
export const id="dl_78ddd73520ba9527202a";
export const url=new URL("../icons/broadcast_on_home.svg?v=7dd22ae91469a76de818cbc8d329ea8a52b4a0463537114f8235071c5134da5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
