export const name="plagiarism";
export const id="dl_8119295ced2f2b7550f9";
export const url=new URL("../icons/plagiarism.svg?v=727467c09115eece4ae2bf587294ba1efb248d3984e6c7283d27d15522ee79de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
