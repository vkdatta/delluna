export const name="copy";
export const id="dl_77480153d3db17f90317";
export const url=new URL("../icons/copy.svg?v=cdd4ce31a0eea8f614a9b4040db237cd5ed89354d553b9a8d5a8ea9ddb6d67fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
