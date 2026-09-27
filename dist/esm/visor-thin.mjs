export const name="visor-thin";
export const id="dl_a3c3c4ac58e797ac8858";
export const url=new URL("../icons/visor-thin.svg?v=9a0a65bf02c1c12ea65169ead2c1d806c9521834984c80f08c0192a814f11da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
