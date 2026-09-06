export const name="pencil-simple-line-bold";
export const id="dl_5d1cb84192a040b2a3d2";
export const url=new URL("../icons/pencil-simple-line-bold.svg?v=1ee0f1ee035c1c71f09c4c0c22f8f50faa7a7e22aea60ae54247670ef42ed102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
