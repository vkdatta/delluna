export const name="check-square-offset-thin";
export const id="dl_4a09848e24014bd5be72";
export const url=new URL("../icons/check-square-offset-thin.svg?v=b56a20c56b52254466da75358609f8ef39182db0df8c8966d922c747a328f839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
