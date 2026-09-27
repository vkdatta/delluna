export const name="moped-front-bold";
export const id="dl_79745c8da8af45f6895f";
export const url=new URL("../icons/moped-front-bold.svg?v=66488097a0e6e47c5de40a4576aabaab38a50325aa105b90dfe6faae91e51900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
