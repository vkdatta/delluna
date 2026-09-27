export const name="bathroom-fill";
export const id="dl_1e47f4894bdaa1b08d58";
export const url=new URL("../icons/bathroom-fill.svg?v=4323912eb2f1e56238c8c3265693355b08de85775c10067fc0f00feee5fed9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
