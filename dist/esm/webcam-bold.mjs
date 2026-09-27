export const name="webcam-bold";
export const id="dl_979940cdb50ea5fa8791";
export const url=new URL("../icons/webcam-bold.svg?v=3f5b845816ec0efd75a76713844923b0d9aea28ee0e22129b5a20e25b2b93b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
