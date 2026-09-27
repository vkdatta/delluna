export const name="handbag-simple-thin";
export const id="dl_cbbe92d3ac224e1197d3";
export const url=new URL("../icons/handbag-simple-thin.svg?v=9a144d3ba82686edbb02bf793db26051420bb72cb6e5e051384e11ff52502022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
