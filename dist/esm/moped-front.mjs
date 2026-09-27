export const name="moped-front";
export const id="dl_42761abc653a4261acb6";
export const url=new URL("../icons/moped-front.svg?v=6c23523341fff99d725da8df1db5879ce4a56110c31691969de582a0eda387c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
