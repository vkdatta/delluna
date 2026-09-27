export const name="traffic_jam-fill";
export const id="dl_43b2b09ef52ef468cabf";
export const url=new URL("../icons/traffic_jam-fill.svg?v=ea6f80da4bb957263c4d4c2d98129c0fb91aa96311af69bf0dbadfa8048642a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
