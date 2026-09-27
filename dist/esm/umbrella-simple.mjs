export const name="umbrella-simple";
export const id="dl_2704c507fece2af73c0d";
export const url=new URL("../icons/umbrella-simple.svg?v=25691e259c1b84b783d177563fc53e633e43bfbba4021ab05cbd0480209857bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
