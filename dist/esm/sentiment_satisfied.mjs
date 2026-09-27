export const name="sentiment_satisfied";
export const id="dl_3575e5a4702443bc2c5d";
export const url=new URL("../icons/sentiment_satisfied.svg?v=bb3397e35fccc8c8e8505bbb4a41d0ae14de53ee88603ed6f8a617e9a3cb70bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
