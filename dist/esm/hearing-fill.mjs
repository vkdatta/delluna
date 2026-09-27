export const name="hearing-fill";
export const id="dl_81145c5d2924c43aeb79";
export const url=new URL("../icons/hearing-fill.svg?v=b0b1f1a4e54c0858451fc9a150602f09a56191b096679d7b593a9439056b45e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
