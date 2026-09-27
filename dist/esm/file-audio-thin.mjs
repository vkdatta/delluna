export const name="file-audio-thin";
export const id="dl_a29dd139a41f4b5cb4ae";
export const url=new URL("../icons/file-audio-thin.svg?v=2e3ba7a0c35adb4897d601db6adaad9f15a1083ed39ca15e590ccee434d74ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
