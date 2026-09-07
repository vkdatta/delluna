export const name="file-dashed-bold";
export const id="dl_7e97c989a3e649db9d51";
export const url=new URL("../icons/file-dashed-bold.svg?v=c965f22b07994c5f73d8577ff12f1a70378daac687373013e0422127aaeea8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
