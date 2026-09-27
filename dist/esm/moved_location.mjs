export const name="moved_location";
export const id="dl_5e39623b21781cce3d9b";
export const url=new URL("../icons/moved_location.svg?v=defb8c921b582fec9306e73152f3ddac05c970300c30ae32386a60286cd5e6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
