export const name="tabs-fill";
export const id="dl_37f247b23a2e405190eb";
export const url=new URL("../icons/T/tabs-fill.svg?v=1076f664d5b08d5fc4d8feca87032cc38688384e191a4cbbd16970ebba499448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
