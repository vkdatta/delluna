export const name="lucid_1-circle-minus";
export const id="dl_1fd9f882658b4cc9a590";
export const url=new URL("../icons/lucid_1-circle-minus.svg?v=ff711595290cf95fa8adafb72ad1343c14a70db012c2b86c9fcdb711e35e79a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
