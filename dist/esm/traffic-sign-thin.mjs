export const name="traffic-sign-thin";
export const id="dl_c06afd52f29fd57e6cac";
export const url=new URL("../icons/traffic-sign-thin.svg?v=05e661f2da7cababa17408259b4f76f4c7bdb2dc4dc4602540dcdd67dd1ad800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
