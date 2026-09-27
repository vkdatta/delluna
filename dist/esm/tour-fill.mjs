export const name="tour-fill";
export const id="dl_c7cc7f0443627f514729";
export const url=new URL("../icons/tour-fill.svg?v=70c369a68c62cdcefa74e1f503cd1f9b5242c4ef73360d24a8e5575019f269f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
