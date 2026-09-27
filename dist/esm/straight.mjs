export const name="straight";
export const id="dl_01706d65c5b1ee6890db";
export const url=new URL("../icons/straight.svg?v=0d8d1a19f6dd3d6631a2c783886f692fc074568206c6ba63c2860cfbe2c6ef18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
