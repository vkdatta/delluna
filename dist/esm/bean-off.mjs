export const name="bean-off";
export const id="dl_2e1e47c71cbb43c08fa9";
export const url=new URL("../icons/bean-off.svg?v=4d49933587cd87162c3944ebb48eaf0c460f11a531e0cbda25da7638cdfd3c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
