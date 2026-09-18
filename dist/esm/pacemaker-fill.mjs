export const name="pacemaker-fill";
export const id="dl_1d6abb5faf584c69a875";
export const url=new URL("../icons/pacemaker-fill.svg?v=85872adf18eede733b4362e2001230b220ce9f29e679fc68a2cebee29d319764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
