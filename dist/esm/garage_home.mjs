export const name="garage_home";
export const id="dl_805e1f34414ccbe8b38a";
export const url=new URL("../icons/garage_home.svg?v=4a2319c0512a1b6461fc19b0289a9110f861e3d8df98d8aacf38089680d85b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
