export const name="reset_tv";
export const id="dl_b35468da8b552dca91ee";
export const url=new URL("../icons/reset_tv.svg?v=326cd6bff123f4c451aafed400fefc8cb7f60c744e18cc800b00de4b02bd7a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
