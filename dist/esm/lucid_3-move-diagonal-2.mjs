export const name="lucid_3-move-diagonal-2";
export const id="dl_0d1a7bace9f74b90aa27";
export const url=new URL("../icons/lucid_3-move-diagonal-2.svg?v=c3b25a466e94a01d1f2af98ff387d1522c3c066e34585ec2287b827da89959c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
