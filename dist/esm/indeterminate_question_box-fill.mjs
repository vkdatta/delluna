export const name="indeterminate_question_box-fill";
export const id="dl_be7dee91661545d894b2";
export const url=new URL("../icons/indeterminate_question_box-fill.svg?v=7e56a715546b0200b3d69060054da238e35a76247b7b34a011dbdd4de7a6b096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
