export const name="line_start_diamond";
export const id="dl_f1219f88b3c78d55a6f5";
export const url=new URL("../icons/line_start_diamond.svg?v=3b7216734524ee4a52c109352940362e6b33de11463b84c6c5d68cc447646b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
