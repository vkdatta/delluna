export const name="bag-simple-thin";
export const id="dl_8a0109bb863848b1ad9e";
export const url=new URL("../icons/bag-simple-thin.svg?v=b3783c67d091d3a0f053612c80fe7a867a8a6069b7e364f8b8d9862f0934a2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
