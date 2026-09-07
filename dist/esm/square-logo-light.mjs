export const name="square-logo-light";
export const id="dl_5f643de753c547c5b59a";
export const url=new URL("../icons/S/square-logo-light.svg?v=58ea762a6281b5dc191a9c92ba88652903ac5c3b2d41cecb060dba0057db7d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
