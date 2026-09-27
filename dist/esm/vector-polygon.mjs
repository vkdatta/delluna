export const name="vector-polygon";
export const id="dl_9938956ba478471b8207";
export const url=new URL("../icons/vector-polygon.svg?v=83c0496eab8f7b932f84a3c685129f83af7b66a903eab7f4522df7228c63995b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
