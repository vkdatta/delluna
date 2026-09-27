export const name="check_box";
export const id="dl_60de39e6c1a3fafefca1";
export const url=new URL("../icons/check_box.svg?v=e5763c46ae0438f793c196b96bd443cd88caaae325d3d43314d10a3e3a39cc3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
