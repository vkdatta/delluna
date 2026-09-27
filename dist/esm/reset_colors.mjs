export const name="reset_colors";
export const id="dl_e98637a4bc63cc604de9";
export const url=new URL("../icons/reset_colors.svg?v=a0cf900d2ebcc3b8b97381d30c7b6efdad56bf717e659c4bf7d8c2e948ddb944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
