export const name="format_align_justify";
export const id="dl_230f60f59f27143ff9d1";
export const url=new URL("../icons/format_align_justify.svg?v=264075da71fbc476a0e893835ee01ad649e4758b06c6042e6a541a49b258f0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
