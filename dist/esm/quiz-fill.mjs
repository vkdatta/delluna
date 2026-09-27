export const name="quiz-fill";
export const id="dl_d9a5f2a5026101624186";
export const url=new URL("../icons/quiz-fill.svg?v=de2fe9c899dda1bca8e8368b349347e83388caf1429bb4466fa87fab1379c421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
