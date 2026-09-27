export const name="error_med";
export const id="dl_afae0eb8c7e4021d54f0";
export const url=new URL("../icons/error_med.svg?v=9a179bc92bca67d144495e9a9446b8f85c233f5135e32bea3ecded2ebe4bb8c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
