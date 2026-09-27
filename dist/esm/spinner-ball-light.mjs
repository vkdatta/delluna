export const name="spinner-ball-light";
export const id="dl_08f23c52f6f8b1f27939";
export const url=new URL("../icons/spinner-ball-light.svg?v=ed34f3a1de46024a51c14a0571546e96301fc539093e982556408dc21fe42245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
