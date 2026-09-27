export const name="select_all-fill";
export const id="dl_8d6a4545f1af78ba9a2d";
export const url=new URL("../icons/select_all-fill.svg?v=37e3b2da46c49fb31599bff0c156087ee281fd8d1d5c18750e47c0732c9a6e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
