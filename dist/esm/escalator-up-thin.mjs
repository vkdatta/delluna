export const name="escalator-up-thin";
export const id="dl_2751cc0e30a146969985";
export const url=new URL("../icons/escalator-up-thin.svg?v=b6472115b614c8fb018fec085d67b705d2cba4eebca822a33910a52aeeb1e6f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
