export const name="person_play";
export const id="dl_c6d2c7236803f3edffcb";
export const url=new URL("../icons/person_play.svg?v=03ca970f98952767481036bcc6cd96ffeaa94c67febf4849bcf3b3d49080a2e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
