export const name="question-light";
export const id="dl_a7632a81e3f5454e9580";
export const url=new URL("../icons/question-light.svg?v=e71b41160721defec0069d356d300f31bba6e61050617c6f475095d1f9888a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
