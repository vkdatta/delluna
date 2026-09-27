export const name="door_front";
export const id="dl_fde039cf34f74ceb8088";
export const url=new URL("../icons/door_front.svg?v=fe180b62ff9ea451f3ec1c67037d555f01a29973200954f13c960001661d8e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
