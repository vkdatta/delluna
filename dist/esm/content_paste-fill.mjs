export const name="content_paste-fill";
export const id="dl_d59f40d59c7b9b4e0ac0";
export const url=new URL("../icons/content_paste-fill.svg?v=dac605cd9f65cec562d0227b30661fd512a404f03635d814a47a3aae616b5287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
