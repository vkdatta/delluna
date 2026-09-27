export const name="assignment_ind";
export const id="dl_a96638600e058e733b9c";
export const url=new URL("../icons/assignment_ind.svg?v=de8bd205e50dbd31270a871c2d55a3be2bcac7b107b65cfdae4b8716696cd6fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
