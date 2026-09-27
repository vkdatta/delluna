export const name="less-than-or-equal-thin";
export const id="dl_7e63014de59e482cb9c3";
export const url=new URL("../icons/less-than-or-equal-thin.svg?v=9bc2c89babff8ed9c3868b36168793db20777902bd555a35c8e5d6888ecf8abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
