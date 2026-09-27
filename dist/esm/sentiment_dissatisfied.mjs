export const name="sentiment_dissatisfied";
export const id="dl_2bcb851af6a6854b18a5";
export const url=new URL("../icons/sentiment_dissatisfied.svg?v=9824b3456f5c9839a4aaa5b5b6c4aeb165a9dd32d58f1df50ce7b1de8f2bbafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
