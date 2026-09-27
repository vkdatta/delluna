export const name="square-minus";
export const id="dl_4accee062c114ff78f8b";
export const url=new URL("../icons/square-minus.svg?v=ac6549643c01e852afaba3ae6833faceec991cc831a4dd0dd4ffb68a82556423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
