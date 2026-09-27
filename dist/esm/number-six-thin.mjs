export const name="number-six-thin";
export const id="dl_8c093ea27258478fa2cc";
export const url=new URL("../icons/number-six-thin.svg?v=00039f750dec4c42bc717a4f1d8d780347db5e162f5ffbea89704d2ad2f22a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
