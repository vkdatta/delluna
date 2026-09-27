export const name="medium-logo-fill";
export const id="dl_b3dd7f4a8e2048d0a1c2";
export const url=new URL("../icons/medium-logo-fill.svg?v=8cce2ed1558456cb36162f7339f7be084c8da8504b74961fd10fd75a20cb4108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
