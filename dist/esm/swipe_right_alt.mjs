export const name="swipe_right_alt";
export const id="dl_78ff5e6854144f5195e1";
export const url=new URL("../icons/S/swipe_right_alt.svg?v=67529e4dc5334f3ac3a8c96244ea5b97000132107bb999d438495ff87adfb365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
