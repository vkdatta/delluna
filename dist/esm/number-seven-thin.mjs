export const name="number-seven-thin";
export const id="dl_dc8db2ed8eef4a60aab0";
export const url=new URL("../icons/number-seven-thin.svg?v=45734b57c3f72ad15bd474f12e1d7fea10cf47f21b2ba18aa4030c2f9755107e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
