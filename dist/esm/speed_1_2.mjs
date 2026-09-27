export const name="speed_1_2";
export const id="dl_524744758ff9a47aba2d";
export const url=new URL("../icons/speed_1_2.svg?v=8564aa31b82c30ec3e4e9ee08cae998d2ec554806b76c59dbc5c69aaf5c5288f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
