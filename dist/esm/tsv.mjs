export const name="tsv";
export const id="dl_e9ff75708948d2c28d3d";
export const url=new URL("../icons/tsv.svg?v=e76a2bafd45132baaf720f86a737fbee4b2947f1afced30e76cfa4d9c7dcdc56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
