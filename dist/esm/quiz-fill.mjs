export const name="quiz-fill";
export const id="dl_558550346a5a4defbdc1";
export const url=new URL("../icons/Q/quiz-fill.svg?v=ebc2516e5a29a5da029dcb548008554627b2d12fe6d3f030becb43f69d1b47dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
