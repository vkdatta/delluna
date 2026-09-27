export const name="arrow-up-right-thin";
export const id="dl_cd2d1d9a96f641dabb5f";
export const url=new URL("../icons/arrow-up-right-thin.svg?v=7de1ae15ef0e8080fba9a31dcfa48044adad813999590f5f6d5c68cd45afb931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
