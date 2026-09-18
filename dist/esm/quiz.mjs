export const name="quiz";
export const id="dl_a3b13560f17a495fa215";
export const url=new URL("../icons/quiz.svg?v=0d2f72a9db9ecece1f39dad3d67ed13bb0bcdb0fb3b308c17669a54f1bedc015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
