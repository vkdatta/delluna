export const name="frame_person_mic";
export const id="dl_83e0fd28e97ffeede8e3";
export const url=new URL("../icons/frame_person_mic.svg?v=e05795bcfce4e00a3c737572a9a8490f269d250d2238da016b09caeca493fb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
