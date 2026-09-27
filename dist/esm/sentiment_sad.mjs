export const name="sentiment_sad";
export const id="dl_3acf3e6d7db678054fca";
export const url=new URL("../icons/sentiment_sad.svg?v=253a5633801279f6faf77f50c7e94261f6ace3924a6db767505f09aa7a52500a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
