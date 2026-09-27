export const name="fast-forward-thin";
export const id="dl_d345d1a9c5d54dee810a";
export const url=new URL("../icons/fast-forward-thin.svg?v=0d5b88d6a5089df2c7ab0917b899c6137d074e9a8237259f7403cb6cb82c964c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
