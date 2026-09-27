export const name="lucid_1-circle-pound-sterling";
export const id="dl_3a9a07936043433a8084";
export const url=new URL("../icons/lucid_1-circle-pound-sterling.svg?v=9333d1f017f8e96a40a19fdf112fb377201c8ad60426f98958d6d50c8650272e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
