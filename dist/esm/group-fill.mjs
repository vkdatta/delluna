export const name="group-fill";
export const id="dl_d0cb721c54e94a0d94a3";
export const url=new URL("../icons/group-fill.svg?v=4b5939ab56dd492e5da91245dc2940ea2e417d9bdc3603546d8bfb1bd138da7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
