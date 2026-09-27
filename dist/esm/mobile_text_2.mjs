export const name="mobile_text_2";
export const id="dl_d90c94c1de13ddb0ca7f";
export const url=new URL("../icons/mobile_text_2.svg?v=6c41eded404e8c56049fa6abada59e4171962d06e9888881935e82e152eff184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
