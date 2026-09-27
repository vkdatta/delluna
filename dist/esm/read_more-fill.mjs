export const name="read_more-fill";
export const id="dl_34e8a093e5b9c28f1282";
export const url=new URL("../icons/read_more-fill.svg?v=749c9d7b9b16acaaa155be4caa1fb237049da19201fd0b9fb837372770323f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
