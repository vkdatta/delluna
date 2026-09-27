export const name="file-py";
export const id="dl_19441fc0aab54a1fa054";
export const url=new URL("../icons/file-py.svg?v=131648543660361572f6a16595c7c5b09d99ab7ff9482f8eec71f6e004849658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
