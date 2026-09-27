export const name="warning-light";
export const id="dl_5a1cbf4a487413889e90";
export const url=new URL("../icons/warning-light.svg?v=6a956ec0a2cf7c917a219f51d193c0c5a1aeb1d6e74309f41a376b7def335d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
