export const name="funnel-simple-x";
export const id="dl_2c7fb9d69f1b48569704";
export const url=new URL("../icons/funnel-simple-x.svg?v=dbe8cfa2cc148fd1b2929e297df133217c18bf4449eef33ac3bf9859c5af0402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
