export const name="resume-fill";
export const id="dl_e3c9287deea602e41c4d";
export const url=new URL("../icons/resume-fill.svg?v=e52615f1d1b50909f4795e15fd8e5e65ccda2205071d500350636419dc137038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
