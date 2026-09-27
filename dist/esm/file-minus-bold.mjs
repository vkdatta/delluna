export const name="file-minus-bold";
export const id="dl_af149e9a7f4041409eb1";
export const url=new URL("../icons/file-minus-bold.svg?v=491f5eea2981280ef839874a60c49411c06ba6185a8fd7972f78329a441c77d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
