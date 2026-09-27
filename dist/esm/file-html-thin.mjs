export const name="file-html-thin";
export const id="dl_663c14fe2e774912b3f4";
export const url=new URL("../icons/file-html-thin.svg?v=cccceca6d6a499492ccda85ebf7d897fe8c3d09955f0dc2f80cadb34e70dae09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
