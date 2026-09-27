export const name="adjust";
export const id="dl_760b7060287e07652d49";
export const url=new URL("../icons/adjust.svg?v=748c41993a21cb9735cd20ac572b998c70fe0f4f3743183782d5909c5039e103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
