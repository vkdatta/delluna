export const name="number-square-zero-thin";
export const id="dl_059205b5984c454e9df3";
export const url=new URL("../icons/number-square-zero-thin.svg?v=30f22969286b713b06c22b1128e8f0ca28ff5287a3327a7c06299737c42e5004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
