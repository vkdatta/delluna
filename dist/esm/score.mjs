export const name="score";
export const id="dl_259ccff06ad76ee6aaea";
export const url=new URL("../icons/score.svg?v=7491dc1266a8616c8c46219ae919f4c49630cfc06a9db574c12615b983ad32ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
