export const name="pencil-simple-line-bold";
export const id="dl_5d1cb84192a040b2a3d2";
export const url=new URL("../icons/pencil-simple-line-bold.svg?v=f5b00752dafc436812a515954605922b252f443c91ec31c1a5e53b7d062f9804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
