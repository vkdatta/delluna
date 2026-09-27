export const name="more_time-fill";
export const id="dl_687b7434167994dd5a55";
export const url=new URL("../icons/more_time-fill.svg?v=ae16ee0ac9db06b6156d2cd0a22a454f2503c839a92d8926272611349e5f2f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
