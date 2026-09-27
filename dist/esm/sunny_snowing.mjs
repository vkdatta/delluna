export const name="sunny_snowing";
export const id="dl_bf6687b1ef5001564bb6";
export const url=new URL("../icons/sunny_snowing.svg?v=4804a9c0e142c6aebff8509f00c97cf62fd51d6b0f694883d31520ba7d0daac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
