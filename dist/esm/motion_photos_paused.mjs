export const name="motion_photos_paused";
export const id="dl_76e8b9972a7e9f7affc8";
export const url=new URL("../icons/motion_photos_paused.svg?v=801c6fea0789c54dd9a58e93e81b86ddddcab8cf0604188611ba3e8d06c1b9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
