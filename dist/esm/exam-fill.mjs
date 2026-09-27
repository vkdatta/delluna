export const name="exam-fill";
export const id="dl_86ea817d1f314406af87";
export const url=new URL("../icons/exam-fill.svg?v=61a0e55e20a15362e015067bc353861a3bfcfb941d5b22e420da45c6aa52007a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
