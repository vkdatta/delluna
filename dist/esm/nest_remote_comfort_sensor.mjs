export const name="nest_remote_comfort_sensor";
export const id="dl_4e6a8fbed5ff31c640c6";
export const url=new URL("../icons/nest_remote_comfort_sensor.svg?v=04c1040945fff48ac0ba9aa095e1ffac39c124850ad4d49dfe852a754ab78081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
