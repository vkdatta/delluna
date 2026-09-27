export const name="balcony-fill";
export const id="dl_af4e6df942dbbb894572";
export const url=new URL("../icons/balcony-fill.svg?v=fc8d53120932602e1a70062c4735bcac1ff5489d91a30d90c74ed7db2f3e4fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
