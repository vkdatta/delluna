export const name="globe_2_question-fill";
export const id="dl_92ca3263a9f85b50daa9";
export const url=new URL("../icons/globe_2_question-fill.svg?v=e0176fec7af1b9ed9c8e23a117cc7b31e075e434809512ebd9339b3dbd7f7f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
