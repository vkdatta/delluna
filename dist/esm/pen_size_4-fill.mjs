export const name="pen_size_4-fill";
export const id="dl_2f67efacd32a9280eae3";
export const url=new URL("../icons/pen_size_4-fill.svg?v=663b3828f841989d2c11e4e35777fd1175a786b916f118af9eec89d49abb321c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
