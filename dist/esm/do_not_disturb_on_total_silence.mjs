export const name="do_not_disturb_on_total_silence";
export const id="dl_f670032809db49e41ab2";
export const url=new URL("../icons/do_not_disturb_on_total_silence.svg?v=a13c553660984e9b09fba4597b0b9b1672b9af92479aa2b8206061d644418ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
