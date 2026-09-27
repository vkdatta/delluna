export const name="no_luggage-fill";
export const id="dl_73e8b8f29125789eedf8";
export const url=new URL("../icons/no_luggage-fill.svg?v=e8013811c2e6cac961b8991aaf2c26799c4a1f89108ff45abf52306aad920009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
