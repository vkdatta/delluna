export const name="exam-light";
export const id="dl_a0acbb0ef70049e99028";
export const url=new URL("../icons/exam-light.svg?v=bd091adf6ef484eca06f48173d00bed6e007b17007937b78a9b26052dea69fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
