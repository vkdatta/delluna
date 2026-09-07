export const name="moped-front-thin";
export const id="dl_d63eed15e156498ea844";
export const url=new URL("../icons/moped-front-thin.svg?v=73e35baaf1810d02c8aef27393796200a750d5507beb7ab1224930e95a789547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
