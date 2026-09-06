export const name="undo-2";
export const id="dl_c4b452afad9842ebb125";
export const url=new URL("../icons/undo-2.svg?v=d0164ba53ab47cbae4e014a4dcfa94e05051cbfb9210554fe9bc28c80acb211a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
