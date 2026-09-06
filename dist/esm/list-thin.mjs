export const name="list-thin";
export const id="dl_42ac4600149742199e8f";
export const url=new URL("../icons/list-thin.svg?v=1e0c16fb8e0b1c4443056b59598affba486b3ab869c28cd6f56fa18afc521740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
