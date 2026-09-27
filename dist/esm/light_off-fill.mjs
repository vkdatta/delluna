export const name="light_off-fill";
export const id="dl_1ae14f9392ca652ee29e";
export const url=new URL("../icons/light_off-fill.svg?v=1a0eced363253f93224edfb5900e621c5effb944a07fddb185f1e5edfa912920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
